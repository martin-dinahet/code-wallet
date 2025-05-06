import React from "react";
import { Snippet } from "../../types";
import { SnippetContext } from "../contexts/snippet-context";

type Props = {
  children: React.ReactNode;
};

export const SnippetProvider: React.FC<Props> = ({ children, ...props }) => {
  const [snippets, setSnippets] = React.useState<Array<Snippet>>([]);

  React.useEffect(() => {
    const loaded = window.snippetAPI.getSnippets();
    setSnippets(loaded);
  }, []);

  const writeSnippets = (newSnippets: Array<Snippet>) => {
    setSnippets(newSnippets);
    window.snippetAPI.writeSnippets(newSnippets);
  };

  const returnValue = {
    snippets,
    writeSnippets,
  };

  return (
    <SnippetContext.Provider value={returnValue} {...props}>
      {children}
    </SnippetContext.Provider>
  );
};
