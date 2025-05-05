import React from "react";
import { ThemeContext } from "../contexts/theme-context";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) throw new Error("useTheme must be used inside <ThemeProvider />");
  return context;
};
