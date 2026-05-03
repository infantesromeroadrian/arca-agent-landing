"use client";

import dynamic from "next/dynamic";

// react-pageflip is client-only (touches DOM directly during init).
// Next 15 requires `ssr: false` to live inside a Client Component, so the
// dynamic import is wrapped here instead of called from app/page.tsx.
const Flipbook = dynamic(() => import("@/app/components/Flipbook"), {
  ssr: false,
});

export default function FlipbookLoader() {
  return <Flipbook />;
}
