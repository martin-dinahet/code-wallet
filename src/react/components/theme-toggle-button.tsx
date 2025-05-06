import React from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { Button } from "@headlessui/react";

export const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <Button onClick={toggleTheme}>{theme === "dark" ? <Sun /> : <Moon />}</Button>
    </>
  );
};
