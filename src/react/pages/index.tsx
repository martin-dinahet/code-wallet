import React from "react";
import { useSnippets } from "../hooks/use-snippets";
import { Snippet } from "src/types";
import { PrettyButton } from "../components/ui/pretty-button";
import { Link } from "react-router-dom";

export const IndexPage: React.FC = () => {
  const { snippets } = useSnippets();

  return (
    <>
      <main className="bg-background text-foreground">
        <div className="flex m-3 p-2 mt-6 rounded-sm bg-muted">
          {snippets.map((snippet: Snippet) => (
            <div key={snippet.id} className="w-full flex items-center justify-between gap-2">
              <h1 className="font-semibold text-lg">{snippet.title}</h1>
              <div className="flex gap-2 items-center">
                <p className="flex gap-1 items-center text-sm bg-accent text-accent-foreground rounded-full px-3 py-1 mx-2">
                  {snippet.language}
                </p>
                <PrettyButton variant="primary">
                  <Link to={`/snippet-form/?id=${snippet.id}`}>Edit</Link>
                </PrettyButton>
                {/* TODO: Open view modal on click */}
                <PrettyButton variant="primary">View</PrettyButton>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
