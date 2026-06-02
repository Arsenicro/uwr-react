import type { Movie } from "./movie.types";

export const initialMovies: Movie[] = [
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
