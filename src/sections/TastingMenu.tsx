// src/components/restaurant/sections/tasting-menu.tsx

import { motion } from "framer-motion";

import {
  staggerContainer,
  fadeInUp,
} from "@/lib/animations";
import { tastingMenu } from "../data/restaurant";
import { SectionHeader } from "../components/restaurant/layout/SectionHeader";
import { SectionContainer } from "../components/restaurant/layout/SectionContainer";
import {
  CornerOrnament,
  DiamondSeparator,
} from "../components/ui/decorative-elements";
import { GoldButton } from "../components/ui/gold-button";

export function TastingMenu() {
  return (
    <SectionContainer
      id="tasting"
      variant="darker"
      size="large"
      grain
    >
      <SectionHeader
        label={tastingMenu.title}
        title={
          <>
            {tastingMenu.subtitle
              .split(" ")
              .slice(0, -1)
              .join(" ")}{" "}
            <span className="italic text-primary">
              {tastingMenu.subtitle.split(" ").slice(-1)}
            </span>
          </>
        }
        subtitle={tastingMenu.description}
      />

      {/* Menu Container */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Decorative corners */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Menu Card */}
        <div className="relative border border-primary/20 bg-card/30 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              {tastingMenu.title}
            </h3>
            <DiamondSeparator />
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div>
                <span className="font-display text-xl md:text-2xl text-primary">
                  ${tastingMenu.price}
                </span>
                <span className="text-muted-foreground font-sans text-xs md:text-sm ml-2">
                  per person
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div>
                <span className="font-display text-xl md:text-2xl text-primary">
                  ${tastingMenu.pairingPrice}
                </span>
                <span className="text-muted-foreground font-sans text-xs md:text-sm ml-2">
                  wine pairing
                </span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {tastingMenu.courses.map((course, index) => (
              <motion.div
                key={course.course}
                variants={fadeInUp}
                className="group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  {/* Course Number */}
                  <span className="text-primary/60 font-sans text-xs tracking-luxury sm:w-24 shrink-0 uppercase">
                    {course.course}
                  </span>

                  {/* Course Details */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-display text-base md:text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors">
                        {course.name}
                      </h4>
                      <div className="hidden sm:block flex-1 border-b border-dotted border-border/40 mx-2 -translate-y-1" />
                    </div>
                    <p className="font-serif text-xs md:text-sm text-muted-foreground mt-1 italic">
                      {course.description}
                    </p>
                  </div>
                </div>

                {index < tastingMenu.courses.length - 1 && (
                  <div className="mt-6 md:mt-8 w-full h-px bg-linear-to-r from-transparent via-border/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-border/50 text-center">
            <p className="font-serif text-xs md:text-sm text-muted-foreground italic mb-6">
              Please inform us of any dietary restrictions
              or allergies.
              <br className="hidden sm:block" />
              <span className="sm:inline">
                {" "}
                Menu subject to change based on seasonal
                availability.
              </span>
            </p>
            <GoldButton
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reserve Your Experience
            </GoldButton>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
