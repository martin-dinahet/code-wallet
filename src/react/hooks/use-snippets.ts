import React from "react";
import { SnippetContext } from "../contexts/snippet-context";

export const useSnippets = () => {
  const context = React.useContext(SnippetContext);
  if (context === undefined) throw new Error("useSnippets must be used inside <SnippetProvider />");
  return context;
};
