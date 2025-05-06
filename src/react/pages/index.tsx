import React from "react";
import { ThemeToggleButton } from "../components/theme-toggle-button";
import { useSnippets } from "../hooks/use-snippets";
import { Snippet } from "../../types";

export const IndexPage: React.FC = () => {
  const { snippets } = useSnippets();

  return (
    <>
      <main className="bg-white dark:bg-black dark:text-white">
        <h1>This is the 'Home' page.</h1>
        <div>
          {snippets.map((snippet: Snippet) => (
            <article key={snippet.id}>
              <h2>{snippet.title}</h2>
              <p>{snippet.content}</p>
            </article>
          ))}
        </div>
        <ThemeToggleButton />
      </main>
    </>
  );
};
