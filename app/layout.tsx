import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.R.C.A. — Adversarial Multi-Agent System for ML/AI Engineering",
  description:
    "A.R.C.A. — Adversarial multi-agent system for ML/AI engineering. 43 specialized agents, 80 skills, 14-cycle ML pipeline, 9 mortal sins as quality gates. Built with Claude. Applied to the Anthropic Fellows program 2026.",
  authors: [{ name: "Adrian Infantes" }],
  openGraph: {
    title: "A.R.C.A. — Adversarial Multi-Agent System",
    description:
      "43 specialized agents, 80 skills, 14-cycle ML pipeline, 9 mortal sins as quality gates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@600;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
