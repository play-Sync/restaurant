// src/components/restaurant/footer.tsx

import { motion } from "framer-motion";

import { Instagram, Facebook, ArrowUp } from "lucide-react";
import {
  DiamondSeparator,
  GoldDivider,
} from "../components/ui/decorative-elements";
import { restaurantInfo } from "../data/restaurant";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <GoldDivider className="mb-12" />

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl text-foreground mb-3"
            >
              {restaurantInfo.name}
            </motion.h3>
            <p className="font-serif text-sm text-muted-foreground italic mb-4">
              {restaurantInfo.tagline}
            </p>
            <DiamondSeparator className="md:hidden mb-4" />
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-sans text-xs tracking-luxury text-primary mb-4 uppercase">
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Story",
                "Menu",
                "Tasting",
                "Ambience",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="font-sans text-xs tracking-luxury text-primary mb-4 uppercase">
              Visit Us
            </h4>
            <div className="space-y-1 mb-4">
              <p className="font-serif text-sm text-muted-foreground">
                {restaurantInfo.address.street}
              </p>
              <p className="font-serif text-sm text-muted-foreground">
                {restaurantInfo.address.city},{" "}
                {restaurantInfo.address.state}{" "}
                {restaurantInfo.address.zip}
              </p>
            </div>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors block mb-4"
            >
              {restaurantInfo.phone}
            </a>

            {/* Social */}
            <div className="flex justify-center md:justify-end gap-3">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <GoldDivider className="mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground/60 text-center md:text-left">
            © {currentYear} {restaurantInfo.name}. All
            rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
