import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.R.C.A — AI Research & Code Architect for ML/AI Engineering",
  description:
    "A.R.C.A — AI Research & Code Architect for ML/AI engineering. 49 specialized agents, 97 skills, 47 ADRs, 14-cycle ML pipeline (47 phases), 9 mortal sins as quality gates. Built with Claude. Applied to the Anthropic Fellows program 2026.",
  authors: [{ name: "Adrian Infantes" }],
  openGraph: {
    title: "A.R.C.A — AI Research & Code Architect",
    description:
      "49 specialized agents, 97 skills, 47 ADRs, 14-cycle ML pipeline (47 phases), 9 mortal sins as quality gates.",
    type: "website",
    images: [
      {
        url: "/arca-logo.png",
        width: 1419,
        height: 752,
        alt: "A.R.C.A — samurai chibi logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.R.C.A — AI Research & Code Architect",
    description:
      "49 specialized agents, 97 skills, 47 ADRs, 14-cycle ML pipeline. Built with Claude.",
    images: ["/arca-logo.png"],
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
        {/* Fontshare CDN: Clash Display (display) + Satoshi (body) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
