"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * StaggeredList — Fine-grained item-level entrance.
 *
 * Per Emil Kowalski's stagger rule: 30-80ms between items, never longer
 * (long delays make the interface feel slow). Uses the same ease-out curve
 * as RevealOnScroll for cohesion. Items enter with subtle translation +
 * opacity, no scale (Emil: "nothing in real world appears from nothing"
 * but if items already have visible width/height the translation is
 * sufficient — no scale needed).
 *
 * Usage:
 *   <StaggeredList>
 *     {items.map(i => <StaggeredItem key={i.id}>...</StaggeredItem>)}
 *   </StaggeredList>
 *
 * The container uses `whileInView` so the stagger fires once when scrolled
 * into view, not on initial mount (avoids paint flash before scroll).
 */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

type StaggeredListProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

export function StaggeredList({
  children,
  className,
  as = "div",
}: StaggeredListProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
    >
      {children}
    </Component>
  );
}

type StaggeredItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "tr";
};

export function StaggeredItem({
  children,
  className,
  as = "div",
}: StaggeredItemProps) {
  const Component = motion[as];
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
