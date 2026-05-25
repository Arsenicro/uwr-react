import express, { Request, Response } from "express";
import { z } from "zod";

export interface Movie {
  id: string;
  title: string;
  description: string;
  watched: boolean;
}

const moviesData: Movie[] = [
  {
    id: "movie-alice",
    title: "Alice in Wonderland",
    description:
      "Alice returns to Wonderland and learns of her destiny to end the Red Queen's reign.",
    watched: false,
  },
  {
    id: "movie-lion-king",
    title: "The Lion King",
    description:
      "Simba must reclaim his throne from his uncle Scar after a tragedy in the Pride Lands.",
    watched: true,
  },
  {
    id: "movie-beauty-beast",
    title: "Beauty and the Beast",
    description:
      "A prince cursed as a beast must earn love to break the spell.",
    watched: false,
  },
  {
    id: "movie-little-mermaid",
    title: "The Little Mermaid",
    description:
      "A mermaid princess trades her voice for a chance to live on land.",
    watched: true,
  },
  {
    id: "movie-frozen",
    title: "Frozen",
    description:
      "Anna sets out to find her sister Elsa, whose icy powers trapped their kingdom.",
    watched: false,
  },
  {
    id: "movie-tangled",
    title: "Tangled",
    description:
      "Rapunzel leaves her tower for the first time with a charming thief.",
    watched: true,
  },
];

const MovieSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().min(1, "Description is required"),
  watched: z.boolean(),
});

const app = express();

const RESPONSE_THROTTLE_MIN_MS = 300;
const RESPONSE_THROTTLE_MAX_MS = 1500;

app.use(express.json());
app.use((_req, _res, next) => {
  const delay =
    Math.random() * (RESPONSE_THROTTLE_MAX_MS - RESPONSE_THROTTLE_MIN_MS) +
    RESPONSE_THROTTLE_MIN_MS;
  setTimeout(next, delay);
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
  const { watched } = req.query;

  if (watched === "true") {
    return res.json(moviesData.filter((movie) => movie.watched));
  }

  if (watched === "false") {
    return res.json(moviesData.filter((movie) => !movie.watched));
  }

  res.json(moviesData);
});

app.get("/movies/:id", (req: Request, res: Response) => {
  const movie = moviesData.find((item) => item.id === req.params.id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.json(movie);
});

app.post("/movies", (req: Request, res: Response) => {
  const result = MovieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }

  const isDuplicate = moviesData.some(
    (movie) => movie.title.toLowerCase() === result.data.title.toLowerCase(),
  );

  if (isDuplicate) {
    return res.status(409).json({ error: "Movie title already exists" });
  }

  const newMovie: Movie = {
    id: crypto.randomUUID(),
    title: result.data.title,
    description: result.data.description,
    watched: result.data.watched,
  };

  moviesData.push(newMovie);
  res.status(201).json(newMovie);
});

app.put("/movies/:id", (req: Request, res: Response) => {
  const movie = moviesData.find((item) => item.id === req.params.id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  const result = MovieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }

  const isDuplicate = moviesData.some(
    (item) =>
      item.title.toLowerCase() === result.data.title.toLowerCase() &&
      item.id !== req.params.id,
  );

  if (isDuplicate) {
    return res
      .status(409)
      .json({ error: "Another movie already has this title" });
  }

  movie.title = result.data.title;
  movie.description = result.data.description;
  movie.watched = result.data.watched;

  res.json(movie);
});

app.delete("/movies/:id", (req: Request, res: Response) => {
  const index = moviesData.findIndex((movie) => movie.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  const [deletedMovie] = moviesData.splice(index, 1);
  res.json(deletedMovie);
});

app.listen(3001, () => {
  console.log("Movie server running on http://localhost:3001");
});
