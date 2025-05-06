import React from "react";
import { PrettyButton } from "../components/ui/pretty-button";
import { ThemeToggleButton } from "../components/theme-toggle-button";

export const IndexPage: React.FC = () => {
  return (
    <>
      <main className="bg-background text-foreground">
        <h1>This is the 'Home' page.</h1>
        <ThemeToggleButton />
        <PrettyButton variant="accent">Click here</PrettyButton>
      </main>
    </>
  );
};
