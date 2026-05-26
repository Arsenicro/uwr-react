"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type MovieActionState = void | { error: string };

export async function createMovie(
  initialData: MovieActionState,
  formData: FormData,
): Promise<MovieActionState> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const watched = formData.get("watched") === "on";

  const response = await fetch("http://localhost:3001/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, watched }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.error || "Failed to create movie" };
  }

  revalidatePath("/movies");
  redirect("/movies");
}

export async function updateMovie(
  initialData: MovieActionState,
  formData: FormData,
): Promise<MovieActionState> {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const watched = formData.get("watched") === "on";

  const response = await fetch(`http://localhost:3001/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, watched }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.error || "Failed to update movie" };
  }

  revalidatePath("/movies");
  revalidatePath(`/movies/${id}`);
  redirect(`/movies/${id}`);
}
