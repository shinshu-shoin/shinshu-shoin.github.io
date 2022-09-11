export type Blog = {
  id: string;
  title: string;
  content: string;
  category: Category;
  eyecatch: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};