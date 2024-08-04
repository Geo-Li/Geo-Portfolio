import { z } from "zod";

export const CategoryEnum = z.enum([
  "Programming Language",
  "Web Development",
  "Database",
  "Game Development",
  "Artificial Intelligence (AI) && Machine Learning (ML)",
  "Integrated Development Environment (IDE)",
]);
