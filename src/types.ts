export type Theme = "light" | "dark";

export type Snippet = {
  id: string;
  title: string;
  language: string;
  tags: Array<Tag>;
  content: string;
};

export type Tag = {
  id: string;
  title: string;
};
