// src/components/restaurant/sections/ambience-gallery.tsx

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { fadeInUp } from "@/lib/animations";
import { ambienceGallery } from "../data/restaurant";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionContainer } from "../components/restaurant/layout/SectionContainer";
import { SectionHeader } from "../components/restaurant/layout/SectionHeader";

export function AmbienceGallery() {
  const [selectedImage, setSelectedImage] = useState<
    number | null
  >(null);

  return (
    <SectionContainer
      id="ambience"
      variant="default"
      size="large"
    >
      <SectionHeader
        label="The Experience"
        title={
          <>
            An Atmosphere of{" "}
            <span className="italic text-primary">
              Refined Luxury
            </span>
          </>
        }
        subtitle="Every detail of our space has been carefully curated to enhance your dining experience."
      />

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {ambienceGallery.map((item, index) => (
          <GalleryImage
            key={item.id}
            item={item}
            index={index}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox
            images={ambienceGallery}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={() =>
              setSelectedImage((prev) =>
                prev !== null
                  ? (prev + 1) % ambienceGallery.length
                  : 0
              )
            }
            onPrev={() =>
              setSelectedImage((prev) =>
                prev !== null
                  ? (prev - 1 + ambienceGallery.length) %
                    ambienceGallery.length
                  : 0
              )
            }
          />
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}

interface GalleryImageProps {
  item: (typeof ambienceGallery)[0];
  index: number;
  onClick: () => void;
}

function GalleryImage({
  item,
  index,
  onClick,
}: GalleryImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [60, -60]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.8]
  );

  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden cursor-pointer group ${
        isLarge ? "md:col-span-2 aspect-21/9" : "aspect-4/3"
      }`}
      onClick={onClick}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-linear-to-br from-stone-800 via-stone-700 to-amber-900" />
      </motion.div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-t ${item.gradient} transition-opacity duration-500`}
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-display text-lg md:text-xl lg:text-2xl text-white mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <p className="font-serif text-xs md:text-sm text-white/80 max-w-md">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />

      {/* View indicator */}
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-primary text-xl font-light">
          +
        </span>
      </div>
    </motion.div>
  );
}

interface LightboxProps {
  images: typeof ambienceGallery;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-xl"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 text-foreground/60 hover:text-foreground transition-colors bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50"
        onClick={onClose}
      >
        <X size={24} />
      </motion.button>

      {/* Navigation buttons */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-foreground/60 hover:text-primary transition-colors bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft size={28} />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-foreground/60 hover:text-primary transition-colors bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="relative w-[90vw] max-w-5xl aspect-video mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image placeholder */}
        <div className="absolute inset-0 bg-linear-to-br from-stone-800 via-stone-700 to-amber-900 rounded-sm overflow-hidden">
          <div
            className={`absolute inset-0 bg-linear-to-t ${currentImage.gradient}`}
          />
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-linear-to-t from-background via-background/80 to-transparent"
        >
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
            {currentImage.title}
          </h3>
          <p className="font-serif text-muted-foreground text-sm md:text-base">
            {currentImage.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Image counter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground font-sans text-sm tracking-luxury"
      >
        {currentIndex + 1} / {images.length}
      </motion.div>
    </motion.div>
  );
}
