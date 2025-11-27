// src/components/restaurant/layout/section-header.tsx

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, lineReveal } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  showLine?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  showLine = true,
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const lineAlignStyles = {
    left: "mr-auto origin-left",
    center: "mx-auto origin-center",
    right: "ml-auto origin-right",
  };

  return (
    <div
      className={cn(
        "max-w-3xl mb-16 md:mb-24",
        alignStyles[align],
        className
      )}
    >
      {label && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-primary tracking-luxury text-xs md:text-sm font-sans font-medium mb-4 uppercase"
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-normal text-foreground leading-[1.15]"
      >
        {title}
      </motion.h2>

      {showLine && (
        <motion.div
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={cn(
            "w-24 h-px bg-linear-to-r from-transparent via-primary to-transparent mt-8",
            lineAlignStyles[align]
          )}
        />
      )}

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-muted-foreground font-serif text-lg md:text-xl font-light leading-relaxed mt-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
