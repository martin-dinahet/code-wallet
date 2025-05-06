import React from "react";
import { ThemeContext } from "../contexts/theme-context";
import { Theme } from "../../types";

type Props = {
  children: React.ReactNode;
  defaultTheme: Theme;
  storageKey: string;
};

export const ThemeProvider: React.FC<Props> = ({ children, defaultTheme, storageKey, ...props }) => {
  const [theme, setTheme] = React.useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  React.useEffect(() => {
    window.document.documentElement.classList.remove("light", "dark");
    if (theme === "dark") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      window.document.documentElement.classList.add(systemTheme);
      return;
    }
    window.document.documentElement.classList.add(theme);
  }, [theme]);

  const returnValue = {
    theme: theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={returnValue} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
