import React from "react";
import { ThemeToggleButton } from "../components/theme-toggle-button";

export const IndexPage: React.FC = () => {
  return (
    <>
      <main className="bg-white dark:bg-black dark:text-white">
        <h1>This is the 'Home' page.</h1>
        <ThemeToggleButton />
      </main>
    </>
  );
};
