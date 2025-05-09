import React from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { PrettyButton } from "./ui/pretty-button";

export const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <PrettyButton variant="ghost" onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </PrettyButton>
    </>
  );
};
