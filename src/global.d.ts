interface SnippetAPI {
  getSnippets: () => Array<Snippet>;
  writeSnippets: (snippets: Array<Snippet>) => void;
}

interface Window {
  snippetAPI: SnippetAPI;
}
