import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://saifmohamedsv.vercel.app"),
  title: "Saif Mohamed",
  description:
    "Fullstack Frontend Developer | React.js specialist | 🚀 MERN stack | 🙌 Passionate about guiding fresh developers",
  openGraph: {
    title: "Saif Mohamed",
    url: "https://saifmohamedsv.vercel.app/",
    images: [
      {
        url: "https://saifmohamedsv.vercel.app/api/og?title=B-R.io",
        alt: "s-m.io",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="width-full bg-contrast text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
