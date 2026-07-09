import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Free Online Gematria Calculator — Hebrew & English, 6 Ciphers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a365d 0%, #2c5282 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 24 }}>א = 1</div>
        <div style={{ fontSize: 64, fontWeight: 700, textAlign: "center", maxWidth: 1000 }}>
          Gematria Guru
        </div>
        <div style={{ fontSize: 34, marginTop: 20, color: "#cbd5e0", textAlign: "center", maxWidth: 1000 }}>
          Free Online Gematria Calculator — Hebrew &amp; English, 6 Ciphers
        </div>
      </div>
    ),
    size
  );
}
