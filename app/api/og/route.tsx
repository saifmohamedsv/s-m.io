import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://saifmohamedsv.vercel.app/og-bg.png)",
        }}
      ></div>
    ),
    {
      width: 1920,
      height: 1080,
    },
  );
}
