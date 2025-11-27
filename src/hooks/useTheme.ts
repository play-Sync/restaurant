// src/hooks/use-theme.ts

import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "restaurant-theme"
    ) as Theme | null;
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTimeout(() => {
      applyTheme(initialTheme);
      setThemeState(initialTheme);
      setMounted(true);
    }, 0);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("restaurant-theme", newTheme);
    applyTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
}
