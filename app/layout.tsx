import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.R.C.A — AI Research & Code Architect for ML/AI Engineering",
  description:
    "A.R.C.A — AI Research & Code Architect. 59 specialized agents, 145 skills, 111 ADRs, 3 pipelines (ML 14 cycles + HTB 6 phases + ART 9 phases), 9 mortal sins as quality gates. Built with Claude.",
  authors: [{ name: "Adrian Infantes" }],
  openGraph: {
    title: "A.R.C.A — AI Research & Code Architect",
    description:
      "59 agents, 3 pipelines (ML + HTB + ART), 145 skills, 111 ADRs, 30+ MCPs. AI Security Engineer.",
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
      "59 agents, 3 pipelines, 145 skills, 111 ADRs. Built with Claude.",
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
