// Web Crypto API — works in both Edge (middleware) and Node.js (API routes)

function hexEncode(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexDecode(hex: string): Uint8Array {
  const pairs = hex.match(/.{2}/g) ?? [];
  return new Uint8Array(pairs.map((h) => parseInt(h, 16)));
}

async function hmacKey(secret: string, usage: "sign" | "verify") {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    [usage]
  );
}

/** Issue a random HMAC-signed session token. Cookie never contains the password. */
export async function signToken(password: string): Promise<string> {
  const nonceBytes = crypto.getRandomValues(new Uint8Array(32));
  const nonce = hexEncode(nonceBytes.buffer as ArrayBuffer);
  const key = await hmacKey(password, "sign");
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(nonce));
  return `${nonce}.${hexEncode(sig)}`;
}

/** Constant-time verification of the session token. */
export async function verifyToken(token: string, password: string): Promise<boolean> {
  try {
    const dot = token.indexOf(".");
    if (dot === -1) return false;
    const nonce = token.slice(0, dot);
    const sig = hexDecode(token.slice(dot + 1));
    const key = await hmacKey(password, "verify");
    return crypto.subtle.verify("HMAC", key, sig, new TextEncoder().encode(nonce));
  } catch {
    return false;
  }
}
