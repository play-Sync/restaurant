// src/components/restaurant/sections/hero.tsx

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  fadeInBlur,
  staggerContainer,
} from "@/lib/animations";
import { restaurantInfo } from "../data/restaurant";
import { ChevronDown } from "lucide-react";
import { Flourish } from "../components/ui/decorative-elements";
import { GoldButton } from "../components/ui/gold-button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 1.15]
  );

  const scrollToStory = () => {
    document
      .getElementById("story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0" />{" "}
        {/*bg-linear-to-br from-stone-900 via-stone-800 to-amber-950*/}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
      </motion.div>

      {/* Grain */}
      <div className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          <motion.p
            variants={fadeInBlur}
            className="text-primary/70 font-sans text-xs md:text-sm tracking-luxury"
          >
            EST. {restaurantInfo.established}
          </motion.p>

          <motion.h1
            variants={fadeInBlur}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-none"
          >
            {restaurantInfo.name}
          </motion.h1>

          <motion.div variants={fadeInBlur}>
            <Flourish />
          </motion.div>

          <motion.p
            variants={fadeInBlur}
            className="font-serif text-lg sm:text-xl md:text-2xl text-foreground/80 font-light italic max-w-2xl mx-auto leading-relaxed px-4"
          >
            {restaurantInfo.tagline}
          </motion.p>

          <motion.div
            variants={fadeInBlur}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-8"
          >
            <GoldButton
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="large"
            >
              Reserve a Table
            </GoldButton>
            <GoldButton
              variant="ghost"
              size="large"
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Menu
            </GoldButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToStory}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-primary/50 text-xs font-sans tracking-luxury group-hover:text-primary/80 transition-colors">
            SCROLL
          </span>
          <ChevronDown className="w-5 h-5 text-primary/50 group-hover:text-primary/80 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
