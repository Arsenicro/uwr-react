import express, { Request, Response } from "express";
import { z } from "zod";

export const categories = [
  "fantasy",
  "adventure",
  "family",
  "musical",
  "animation",
  "drama",
  "comedy",
] as const;

export type Category = (typeof categories)[number];

export interface Movie {
  id: string;
  title: string;
  description: string;
  categories: Category[];
}

export const moviesData: Movie[] = [
  {
    id: crypto.randomUUID(),
    title: "Alice in Wonderland",
    description:
      "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
    categories: ["fantasy", "adventure", "family", "musical"],
  },
  {
    id: crypto.randomUUID(),
    title: "The Lion King",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    categories: ["animation", "adventure", "drama", "family"],
  },
  {
    id: crypto.randomUUID(),
    title: "Beauty and the Beast",
    description:
      "A selfish prince is cursed to become a monster for the rest of his life, unless he learns to love another and earn her love in return.",
    categories: ["animation", "adventure", "family", "fantasy"],
  },
  {
    id: crypto.randomUUID(),
    title: "The Little Mermaid",
    description:
      "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love.",
    categories: ["animation", "adventure", "comedy", "family"],
  },
  {
    id: crypto.randomUUID(),
    title: "Frozen",
    description:
      "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
    categories: ["animation", "adventure", "comedy", "family"],
  },
  {
    id: crypto.randomUUID(),
    title: "Tangled",
    description:
      "The magically long-haired Rapunzel has spent her entire life in a tower, but when she falls in love with a bandit who happens to be passing by, she decides to finally venture out into the world on her own.",
    categories: ["animation", "adventure", "comedy", "family"],
  },
];

const MovieSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().min(1, "Description is required"),
  categories: z
    .array(z.enum(categories))
    .min(1, "At least one category is required"),
});

const app = express();

const RESPONSE_THROTTLE_MAX_MS = 1500;
const RESPONSE_THROTTLE_MIN_MS = 300;

app.use(express.json());
app.use((req, _res, next) => {
  const searchParam = req.query.search;
  const search =
    typeof searchParam === "string" ? searchParam.trim().toLowerCase() : "";

  // Surprise tool
  const timeoutMS =
    search === "lion"
      ? 2000
      : Math.random() * (RESPONSE_THROTTLE_MAX_MS - RESPONSE_THROTTLE_MIN_MS) +
        RESPONSE_THROTTLE_MIN_MS;

  setTimeout(next, timeoutMS);
});

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

  if (_req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/movies", (req: Request, res: Response) => {
  const searchParam = req.query.search;
  const search =
    typeof searchParam === "string" ? searchParam.trim().toLowerCase() : "";

  if (!search) {
    return res.json(moviesData);
  }

  const filteredMovies = moviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(search);
  });

  res.json(filteredMovies);
});

app.get("/categories", (req: Request, res: Response) => {
  res.json(categories);
});

app.post("/movies", (req: Request, res: Response) => {
  const result = MovieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }

  const { title, description, categories: selectedCategories } = result.data;

  const isDuplicate = moviesData.some(
    (m) => m.title.toLowerCase() === title.toLowerCase(),
  );

  if (isDuplicate) {
    return res.status(409).json({ error: "Movie title already exists" });
  }

  const newMovie: Movie = {
    id: crypto.randomUUID(),
    title,
    description,
    categories: selectedCategories as Category[],
  };

  moviesData.push(newMovie);
  res.status(201).json(newMovie);
});

app.put("/movies/:id", (req: Request, res: Response) => {
  const movie = moviesData.find((m) => m.id === req.params.id);
  if (!movie) return res.status(404).json({ error: "Movie not found" });

  const result = MovieSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }

  const { title } = result.data;
  const isDuplicate = moviesData.some(
    (m) =>
      m.title.toLowerCase() === title.toLowerCase() && m.id !== req.params.id,
  );

  if (isDuplicate) {
    return res
      .status(409)
      .json({ error: "Another movie already has this title" });
  }

  Object.assign(movie, result.data);
  res.json(movie);
});

app.delete("/movies/:id", (req: Request, res: Response) => {
  const index = moviesData.findIndex((m) => m.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Movie not found" });

  const [deletedMovie] = moviesData.splice(index, 1);
  res.json(deletedMovie);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
