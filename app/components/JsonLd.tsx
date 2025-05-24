export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saif Mohamed",
    url: "https://saifmohamedsv.vercel.app",
    jobTitle: "Frontend Developer & Software Engineer",
    description:
      "Expert Frontend Developer and Software Engineer specializing in React.js, MERN stack, and modern web development.",
    sameAs: [
      "https://github.com/saifmohamedsv",
      "https://linkedin.com/in/saifmohamedsv",
      // Add your other social media profiles here
    ],
    knowsAbout: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "MERN Stack",
      "Web Development",
      "Frontend Development",
      "Software Engineering",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
