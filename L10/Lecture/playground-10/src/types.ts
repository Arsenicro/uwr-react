export type Category = {
  id: string;
  name: string;
};

export type Movie = {
  id: string;
  title: string;
  director: string;
  year: number;
  rating: number;
  categoryIds: string[];
  description: string;
  watched: boolean;
};

export type MovieInput = Omit<Movie, "id" | "watched">;

export type Role = "guest" | "admin";
