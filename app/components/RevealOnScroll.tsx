"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

/**
 * RevealOnScroll — Coarse-grained section entrance.
 *
 * Per Emil Kowalski's enter-state pattern + Jakub Krehel's polish guidelines:
 * subtle vertical translation (8-12px) + opacity + soft blur, ease-out at
 * ~500ms, fires once when entering viewport. The custom ease curve
 * (0.23, 1, 0.32, 1) is Emil's recommended UI ease-out from animations.dev.
 *
 * Usage: wrap a `<section>` or `<div>` in `<RevealOnScroll>` to give it a
 * polished entrance instead of popping into existence. Keep it for sections
 * (coarse-grained); for fine-grained item-level stagger use a different
 * pattern (motion.div with staggerChildren — Sprint 2.C scope).
 */
type Props = HTMLMotionProps<"section"> & { children: ReactNode };

export function RevealOnScroll({ children, ...rest }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
