// /api/prerender.js

export default async function handler(req, res) {
  console.log("🔥 [PRERENDER HIT]");

  // Define known bots (case-insensitive)
  const BOT_USER_AGENTS = [
    "googlebot", "bingbot", "yahoo! slurp", "duckduckbot", "baiduspider",
    "facebookexternalhit", "twitterbot", "linkedinbot", "embedly", "pinterest",
    "slackbot", "telegrambot", "applebot"
  ];

  // Parse & normalize user-agent
  const userAgent = (req.headers["user-agent"] || "").toLowerCase();
  const isBot = BOT_USER_AGENTS.some(bot => userAgent.includes(bot));

  console.log(`[DEBUG] UA: ${userAgent}`);
  console.log(`[DEBUG] Is bot? ${isBot}`);

  // Not a bot? Return index.html fallback
  if (!isBot) {
    console.log("[DEBUG] Not a bot — redirecting to SPA index.");
    return res.redirect(302, "/");
  }

  // Sanitize incoming path
  const rawPath = req.query?.path || "/";
  const sanitizedPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;

  // Use dynamic host/protocol
  const host = req.headers["host"];
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const fullUrl = `${protocol}://${host}${sanitizedPath}`;
  const prerenderUrl = `https://service.prerender.io/${fullUrl}`;

  console.log(`[Prerender] → ${prerenderUrl}`);

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": process.env.PRERENDER_TOKEN,
        "User-Agent": userAgent
      }
    });

    const statusCode = response.status;
    const html = await response.text();

    console.log(`[Response] ${statusCode}`);
    console.log(`[HTML Length] ${html.length}`);
    console.log(`[HTML Snippet]\n${html.slice(0, 200)}`);

    if (!response.ok || statusCode >= 400 || html.trim().toLowerCase().includes("not found")) {
      console.error(`[ERROR] Prerender failed (status: ${statusCode})`);
      return res.status(502).send("Failed to fetch valid prerendered content");
    }

    res.setHeader("Content-Type", "text/html");
    res.setHeader("X-Prerender-Proxy", "true");
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

    return res.status(statusCode).send(html);

  } catch (error) {
    console.error("[EXCEPTION] ", error.message || error);
    return res.status(500).send("Prerender internal server error");
  }
}
