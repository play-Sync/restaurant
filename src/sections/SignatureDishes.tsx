// src/components/restaurant/sections/signature-dishes.tsx

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  staggerContainer,
  fadeInUp,
  cardHover,
  imageHoverZoom,
  glowEffect,
} from "@/lib/animations";
import { signatureDishes } from "../data/restaurant";
import { SectionContainer } from "../components/restaurant/layout/SectionContainer";
import { SectionHeader } from "../components/restaurant/layout/SectionHeader";

export function SignatureDishes() {
  return (
    <SectionContainer id="menu" variant="dark" size="large">
      <SectionHeader
        label="Signature Creations"
        title={
          <>
            Culinary{" "}
            <span className="italic text-primary">
              Masterpieces
            </span>
          </>
        }
        subtitle="Each dish tells a story of seasonal ingredients, traditional techniques, and innovative vision."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
      >
        {signatureDishes.map((dish, index) => (
          <DishCard
            key={dish.id}
            dish={dish}
            index={index}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}

interface DishCardProps {
  dish: (typeof signatureDishes)[0];
  index: number;
}

function DishCard({ dish, index }: DishCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <motion.div
      key={index}
      ref={cardRef}
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative"
    >
      <motion.div
        variants={cardHover}
        className="relative overflow-hidden bg-card border border-border/30 h-full transition-colors duration-500 hover:border-primary/30"
      >
        {/* Glow effect */}
        <motion.div
          variants={glowEffect}
          className="absolute -inset-px bg-linear-to-br from-primary/10 via-transparent to-primary/5 z-10 pointer-events-none"
        />

        {/* Image Container */}
        <div className="relative aspect-4/3 overflow-hidden">
          <motion.div
            variants={imageHoverZoom}
            className="absolute inset-0"
            style={{ y }}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${dish.gradient}`}
            />
            <div
              className="absolute inset-0 bg-stone-800"
              style={{
                mixBlendMode: "multiply",
                opacity: 0.3,
              }}
            />
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Tags */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-wrap gap-2 z-20">
            {dish.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 md:px-3 bg-background/90 backdrop-blur-sm text-primary text-[10px] md:text-xs font-sans tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
            <span className="font-display text-xl md:text-2xl text-foreground">
              ${dish.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 relative z-20">
          <p className="text-primary/70 font-sans text-xs tracking-luxury mb-2 uppercase">
            {dish.category}
          </p>
          <h3 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
            {dish.name}
          </h3>
          <p className="font-serif text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {dish.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </motion.div>
    </motion.div>
  );
}
