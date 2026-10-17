import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Shared by icon.tsx and apple-icon.tsx: a bold "Y" in the hero's Kanit Black,
// on the site's #0C0C0C with the same outlined-pill border as the buttons.
export async function renderMark(px: number, rounded: boolean) {
    const black = await readFile(join(process.cwd(), "src/app/og-assets/Kanit-Black.ttf"));
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0C0C0C",
                    borderRadius: rounded ? px * 0.28 : 0,
                    border: rounded ? `${Math.max(2, px * 0.05)}px solid #D7E2EA` : "none",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontFamily: "Kanit",
                        fontWeight: 900,
                        fontSize: px * 0.78,
                        lineHeight: 1,
                        marginTop: px * 0.06,
                        backgroundImage: "linear-gradient(180deg, #8A919B 0%, #D7E2EA 100%)",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Y
                </div>
            </div>
        ),
        { width: px, height: px, fonts: [{ name: "Kanit", data: black, weight: 900, style: "normal" }] },
    );
}

export default function Icon() {
    return renderMark(size.width, true);
}
