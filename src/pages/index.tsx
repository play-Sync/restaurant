// src/pages/index.tsx

import { useEffect } from "react";
import { Navigation } from "../components/restaurant/navigation";
import { Hero } from "../sections/hero";
import { Story } from "../sections/story";
import { SignatureDishes } from "../sections/SignatureDishes";
import { TastingMenu } from "../sections/TastingMenu";
import { AmbienceGallery } from "../sections/AmbienceGallery";
import { Contact } from "../sections/contact";
import { Footer } from "../sections/Footer";
import { FloatingThemeToggle } from "../components/ui/theme-toggle";

export default function HomePage() {
  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "restaurant-theme"
    );
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
    const theme = savedTheme || systemTheme;
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <SignatureDishes />
        <TastingMenu />
        <AmbienceGallery />
        <Contact />
      </main>
      <Footer />
      <FloatingThemeToggle />
    </div>
  );
}
