// src/components/restaurant/navigation.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { Menu, X } from "lucide-react";
import { GoldButton } from "../ui/gold-button";
import { ThemeToggle } from "../ui/theme-toggle";
import { restaurantInfo } from "../../data/restaurant";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Tasting", href: "#tasting" },
  { label: "Ambience", href: "#ambience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navItems.map((item) =>
        item.href.replace("#", "")
      );
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/10"
            : "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-display text-xl md:text-2xl text-foreground tracking-wide">
                {restaurantInfo.name}
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-sans tracking-elegant transition-colors relative group py-2",
                    activeSection ===
                      item.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-primary transition-all duration-300",
                      activeSection ===
                        item.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <GoldButton
                variant="outline"
                size="small"
                className="py-3.5"
                onClick={() => scrollToSection("#contact")}
              >
                Reservations
              </GoldButton>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative z-10 p-2 text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/98 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-6"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + index * 0.05,
                  }}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-3xl font-display transition-colors",
                    activeSection ===
                      item.href.replace("#", "")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <GoldButton
                  onClick={() =>
                    scrollToSection("#contact")
                  }
                  size="large"
                >
                  Make a Reservation
                </GoldButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
