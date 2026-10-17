import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Yash Bisht — Full Stack & GenAI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (name: string) => readFile(join(process.cwd(), "src/app/og-assets", name));

export default async function OpengraphImage() {
    const [black, light, avatar] = await Promise.all([
        asset("Kanit-Black.ttf"),
        asset("Kanit-Light.ttf"),
        asset("avatar.jpg"),
    ]);
    const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    backgroundColor: "#0C0C0C",
                    fontFamily: "Kanit",
                    color: "#D7E2EA",
                }}
            >
                {/* Avatar, fading into the background on its left edge */}
                {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> */}
                <img
                    src={avatarSrc}
                    alt=""
                    width={504}
                    height={630}
                    style={{ position: "absolute", right: 0, top: 0, objectFit: "cover" }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: 504,
                        height: 630,
                        display: "flex",
                        backgroundImage:
                            "linear-gradient(90deg, #0C0C0C 0%, rgba(12,12,12,0.55) 35%, rgba(12,12,12,0) 70%)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "64px 72px",
                        width: 820,
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: 24,
                            fontWeight: 300,
                            letterSpacing: 6,
                            textTransform: "uppercase",
                            color: "rgba(215,226,234,0.6)",
                        }}
                    >
                        Portfolio · New Delhi
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                fontSize: 150,
                                fontWeight: 900,
                                lineHeight: 0.9,
                                letterSpacing: -4,
                                textTransform: "uppercase",
                                backgroundImage: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            <span style={{ height: 136 }}>Yash</span>
                            <span style={{ height: 136 }}>Bisht</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                marginTop: 36,
                                marginBottom: 12,
                                fontSize: 36,
                                fontWeight: 300,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                            }}
                        >
                            Full Stack &amp; GenAI Engineer
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        {["SaaS", "RAG", "AI Products", "3+ Years"].map((t) => (
                            <div
                                key={t}
                                style={{
                                    display: "flex",
                                    border: "2px solid #D7E2EA",
                                    borderRadius: 999,
                                    padding: "8px 24px",
                                    fontSize: 22,
                                    fontWeight: 300,
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                }}
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Kanit", data: black, weight: 900, style: "normal" },
                { name: "Kanit", data: light, weight: 300, style: "normal" },
            ],
        },
    );
}
