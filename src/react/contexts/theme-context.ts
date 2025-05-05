import React from "react";
import { Theme } from "../lib/types";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null,
});
