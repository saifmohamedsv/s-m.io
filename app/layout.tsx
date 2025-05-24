import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://saifmohamedsv.vercel.app"),
  title: "Saif Mohamed | Frontend Developer & Software Engineer",
  description:
    "Saif Mohamed - Expert Frontend Developer and Software Engineer specializing in React.js, MERN stack, and modern web development. Passionate about creating exceptional user experiences and mentoring new developers.",
  keywords: [
    "Saif Mohamed",
    "Frontend Developer",
    "Software Engineer",
    "React.js",
    "MERN Stack",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ].join(", "),
  authors: [{ name: "Saif Mohamed" }],
  creator: "Saif Mohamed",
  publisher: "Saif Mohamed",
  openGraph: {
    title: "Saif Mohamed | Frontend Developer & Software Engineer",
    description:
      "Expert Frontend Developer and Software Engineer specializing in React.js, MERN stack, and modern web development.",
    url: "https://saifmohamedsv.vercel.app/",
    siteName: "Saif Mohamed's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://saifmohamedsv.vercel.app/api/og?title=saifmohamedsv.vercel.app",
        alt: "Saif Mohamed - Frontend Developer & Software Engineer",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Mohamed | Frontend Developer & Software Engineer",
    description:
      "Expert Frontend Developer and Software Engineer specializing in React.js, MERN stack, and modern web development.",
    images: [
      "https://saifmohamedsv.vercel.app/api/og?title=saifmohamedsv.vercel.app",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <JsonLd />
      </head>
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
