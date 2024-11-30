import Image from "next/image";
import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <img
        src="https://saifmohamedsv.vercel.app/og-bg.png"
        alt="Saif Mohamed | Frontend Engineer"
        width={1920}
        height={1080}
      />
    ),
    {
      width: 1920,
      height: 1080,
    },
  );
}
