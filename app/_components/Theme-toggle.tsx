"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="cursor-pointer rounded-2xl p-1 xs:p-1.5 lg:p-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 xs:h-6 xs:w-6 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 xs:h-6 xs:w-6 text-blue-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
