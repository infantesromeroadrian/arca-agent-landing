import dynamic from "next/dynamic";

// react-pageflip is client-only (touches DOM directly).
const Flipbook = dynamic(() => import("@/app/components/Flipbook"), {
  ssr: false,
});

export const metadata = {
  title: "A.R.C.A. — handbook",
  description:
    "Adversarial Research & Code Architect — paginated handbook edition. " +
    "Application to Anthropic Fellows 2026 by Adrian Infantes. " +
    "Prefer scrolling? Visit /scroll.",
};

export default function Page() {
  return <Flipbook />;
}
