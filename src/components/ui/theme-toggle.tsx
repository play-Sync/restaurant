// src/components/restaurant/ui/theme-toggle.tsx

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../../hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({
  className = "",
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-11 h-11 border border-border bg-background/50",
          className
        )}
      />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative w-11 h-11 flex items-center justify-center",
        "border border-primary/30 bg-background/80 backdrop-blur-sm",
        "hover:border-primary hover:bg-primary/10 transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${
        theme === "dark" ? "light" : "dark"
      } mode`}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="w-5 h-5 text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="w-5 h-5 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export function FloatingThemeToggle() {
  const { mounted } = useTheme();

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <ThemeToggle />
    </motion.div>
  );
}
