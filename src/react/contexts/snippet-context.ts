import React from "react";
import { Snippet } from "../../types";

type SnippetContextType = {
  snippets: Array<Snippet>;
  writeSnippets: (newSnippets: Array<Snippet>) => void;
};

export const SnippetContext = React.createContext<SnippetContextType>({
  snippets: [],
  writeSnippets: () => {},
});
