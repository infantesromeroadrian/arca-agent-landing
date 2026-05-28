import Home from "@/app/scroll/page";

export const metadata = {
  title: "A.R.C.A — AI Research & Code Architect for ML/AI Engineering",
  description:
    "57 agents · 3 pipelines (ML + HTB + ART) · 143 skills · 83 ADRs · 30+ MCPs · " +
    "9 mortal sins as quality gates. Built by Adrian Infantes — AI Security Engineer.",
};

/* Root route renders the openclaw-style scroll edition.
   The previous Flipbook (react-pageflip handbook) lives in components/Flipbook.tsx
   as legacy and is not currently routed. /scroll continues to serve the same page
   for share-friendly canonical URLs. */
export default function Page() {
  return <Home />;
}
