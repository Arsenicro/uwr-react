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
