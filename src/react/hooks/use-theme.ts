import React from "react";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) throw new Error("useTheme must be used inside <ThemeProvider />");
  return context;
};
