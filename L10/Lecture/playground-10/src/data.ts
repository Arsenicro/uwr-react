import type { Category, Movie } from "./types";

const starterCategoryIds = {
  animation: "1",
  family: "2",
  musical: "3",
  adventure: "4",
  fantasy: "5",
  princess: "6",
};

export const starterCategories: Category[] = [
  { id: starterCategoryIds.animation, name: "Animation" },
  { id: starterCategoryIds.family, name: "Family" },
  { id: starterCategoryIds.musical, name: "Musical" },
  { id: starterCategoryIds.adventure, name: "Adventure" },
  { id: starterCategoryIds.fantasy, name: "Fantasy" },
  { id: starterCategoryIds.princess, name: "Princess" },
];

export const starterMovies: Movie[] = [
  {
    id: "1",
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    year: 1994,
    rating: 8.5,
    categoryIds: [starterCategoryIds.animation, starterCategoryIds.family],
    description: "A young lion prince learns responsibility and courage.",
    watched: true,
  },
  {
    id: "2",
    title: "Mulan",
    director: "Tony Bancroft, Barry Cook",
    year: 1998,
    rating: 7.7,
    categoryIds: [
      starterCategoryIds.family,
      starterCategoryIds.musical,
      starterCategoryIds.adventure,
      starterCategoryIds.princess,
    ],
    description: "A brave young woman disguises herself to protect her family.",
    watched: false,
  },
  {
    id: "3",
    title: "Beauty and the Beast",
    director: "Gary Trousdale, Kirk Wise",
    year: 1991,
    rating: 8.0,
    categoryIds: [
      starterCategoryIds.animation,
      starterCategoryIds.family,
      starterCategoryIds.musical,
      starterCategoryIds.fantasy,
      starterCategoryIds.princess,
    ],
    description:
      "A prince is cursed to live as a monster until he finds true love.",
    watched: true,
  },
  {
    id: "4",
    title: "Tangled",
    director: "Nathan Greno, Byron Howard",
    year: 2010,
    rating: 7.7,
    categoryIds: [
      starterCategoryIds.animation,
      starterCategoryIds.family,
      starterCategoryIds.musical,
      starterCategoryIds.adventure,
      starterCategoryIds.fantasy,
      starterCategoryIds.princess,
    ],
    description:
      "Rapunzel leaves her tower to discover the world and her true identity.",
    watched: false,
  },
  {
    id: "5",
    title: "Frozen",
    director: "Chris Buck, Jennifer Lee",
    year: 2013,
    rating: 7.4,
    categoryIds: [
      starterCategoryIds.animation,
      starterCategoryIds.family,
      starterCategoryIds.musical,
      starterCategoryIds.fantasy,
      starterCategoryIds.princess,
    ],
    description:
      "Two royal sisters face fear and responsibility in a kingdom trapped in winter.",
    watched: true,
  },
  {
    id: "6",
    title: "Moana",
    director: "Ron Clements, John Musker",
    year: 2016,
    rating: 7.6,
    categoryIds: [
      starterCategoryIds.animation,
      starterCategoryIds.family,
      starterCategoryIds.musical,
      starterCategoryIds.adventure,
      starterCategoryIds.princess,
    ],
    description:
      "A determined voyager sets sail to save her island and restore the ocean's heart.",
    watched: false,
  },
  {
    id: "7",
    title: "The Little Mermaid",
    director: "Ron Clements, John Musker",
    year: 1989,
    rating: 7.6,
    categoryIds: [
      starterCategoryIds.animation,
      starterCategoryIds.family,
      starterCategoryIds.musical,
      starterCategoryIds.fantasy,
      starterCategoryIds.princess,
    ],
    description:
      "A curious mermaid princess dreams of life on land and fights for her own voice.",
    watched: false,
  },
  {
    id: "9",
    title: "Raya and the Last Dragon",
    director: "Don Hall, Carlos Lopez Estrada",
    year: 2021,
    rating: 7.3,
    categoryIds: [
      starterCategoryIds.animation,
      starterCategoryIds.family,
      starterCategoryIds.adventure,
      starterCategoryIds.fantasy,
    ],
    description:
      "A lone warrior searches for the last dragon to reunite a fractured land.",
    watched: false,
  },
];
