import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import advertLeapLogo from "public/work/advertleap-logo.jpeg";
import lnkrLogo from "public/work/lnkr.jpeg";
import springyUniverseLogo from "public/work/springyuniverse-logo.jpeg";
import taqneenLogo from "public/work/taqneen-logo.jpeg";
import xponLogo from "public/work/xpon-logo.jpeg";

import tajmahal from "public/gallery/taj-mahal.jpeg";
import zara from "public/gallery/zara.jpeg";
import Greeting from "./components/Greeting";

export const metadata: Metadata = {
  title: "About | Saif Mohamed",
  description:
    "Fullstack Frontend Developer | React.js specialist | 🚀 MERN stack | 🙌 Passionate about guiding fresh developers",
};

export default async function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={tajmahal}
            alt={"Taj Mahal | India"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={zara}
            alt={"Zara | India"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Saif Mohamed! Originally from Egypt,
            </p>
            <p>
              My curiosity for computers began at age 16, which naturally led me
              to pursue a career in tech. I&apos;ve been working as a software
              engineer, specializing in full-stack development and design, for{" "}
              {new Date().getFullYear() - 2021} years now!
            </p>
            <p>
              In addition to coding, I also mentor junior developers to be
              better and be job-ready at my{" "}
              <Link
                className="underline"
                href="https://discord.com/invite/XEYBTnDEXu"
              >
                Discord
              </Link>{" "}
              server
            </p>
            <p>
              When I&apos;m not at my desk I am probably doing martial arts,
              watching movies, or at a coffee shop :)
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I started my career , which I will always be appreciative of. Then
              I worked at a few small local companies. Now I&apos;m a full stack
              frontend engineer currently working at{" "}
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}
const workplaces = [
  {
    title: "Frontend Developer",
    company: "XPON",
    date: "2023",
    imageSrc: xponLogo,
    link: "https://advertleap.com/",
  },
  {
    title: "Frontend Developer",
    company: "Advert Leap",
    date: "2023",
    imageSrc: advertLeapLogo,
    link: "https://advertleap.com/",
  },
  {
    title: "Frontend Developer",
    company: "Taqneen",
    date: "2022 - 2023",
    imageSrc: taqneenLogo,
    link: "https://taqneen.com/",
  },
  {
    title: "Frontend Developer",
    company: "LNKR",
    date: "2022",
    imageSrc: lnkrLogo,
    link: "https://www.linkedin.com/company/lnkr-ai/",
  },
  {
    title: "Junior Frontend Developer",
    company: "Springy Universe",
    date: "2021 - 2022",
    imageSrc: springyUniverseLogo,
    link: "https://www.linkedin.com/company/springyuniverse",
  },
];
