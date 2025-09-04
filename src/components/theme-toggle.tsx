"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";
import type React from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const effectiveTheme = theme === "system" ? resolvedTheme : theme;
  const nextTheme = effectiveTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      prefixIcon={nextTheme}
    />
  );
};
