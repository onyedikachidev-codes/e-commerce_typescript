"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-8 w-8 xs:h-9 xs:w-9 text-yellow-400" />
      ) : (
        <Moon className="h-8 w-8 xs:h-9 xs:w-9 text-blue-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
