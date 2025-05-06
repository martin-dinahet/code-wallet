import { contextBridge } from "electron";
import { Snippet } from "../types";
import fs from "node:fs";
import path from "node:path";

const filePath = process.env.SNIPPET_FILE || path.join(__dirname, "assets", "snippets.json");

contextBridge.exposeInMainWorld("snippetAPI", {
  getSnippets: () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  },

  writeSnippets: (snippets: Array<Snippet>) => {
    fs.writeFileSync(filePath, JSON.stringify(snippets, null, 2), "utf-8");
  },
});
