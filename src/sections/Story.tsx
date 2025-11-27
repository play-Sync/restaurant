// src/components/restaurant/sections/story.tsx

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { chefInfo, awards } from "../data/restaurant";
import { Quote } from "lucide-react";
import { SectionContainer } from "../components/restaurant/layout/SectionContainer";
import { SectionHeader } from "../components/restaurant/layout/SectionHeader";
import { DiamondSeparator } from "../components/ui/decorative-elements";

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  return (
    <SectionContainer
      id="story"
      variant="gradient"
      size="large"
      ref={containerRef}
    >
      <SectionHeader
        label="Our Story"
        title={
          <>
            A Passion for{" "}
            <span className="italic text-primary">
              Excellence
            </span>
          </>
        }
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Chef Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative order-2 lg:order-1"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-3/4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-stone-800 via-stone-700 to-amber-900" />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />

            {/* Decorative overlay */}
            <div className="absolute inset-8 border border-primary/20" />
          </motion.div>

          {/* Frame decorations */}
          <div className="absolute -inset-3 md:-inset-4 border border-primary/10 -z-10" />
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 md:w-32 h-24 md:h-32 border border-primary/20" />
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 md:w-20 h-16 md:h-20 border border-primary/10" />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 md:space-y-8 order-1 lg:order-2"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              {chefInfo.name}
            </h3>
            <p className="text-primary font-sans text-sm tracking-elegant uppercase">
              {chefInfo.title}
            </p>
          </div>

          <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
            {chefInfo.bio}
          </p>

          {/* Philosophy Quote */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-primary/30 py-2">
            <Quote className="absolute -left-3 md:-left-4 -top-1 w-6 h-6 md:w-7 md:h-7 text-primary/30 bg-background" />
            <p className="font-serif text-base md:text-lg italic text-foreground/90 leading-relaxed">
              "{chefInfo.philosophy}"
            </p>
          </div>

          {/* Accolades */}
          <div className="pt-4 md:pt-6">
            <DiamondSeparator className="mb-6 md:mb-8" />
            <div className="space-y-3">
              {chefInfo.accolades.map((accolade, index) => (
                <motion.div
                  key={accolade}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rotate-45 bg-primary shrink-0" />
                  <span className="font-sans text-sm text-muted-foreground">
                    {accolade}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Awards Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 md:mt-28 pt-12 md:pt-16 border-t border-border"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <p className="text-primary font-sans text-xs tracking-luxury mb-2">
                {award.year}
              </p>
              <p className="font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {award.title}
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                {award.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
