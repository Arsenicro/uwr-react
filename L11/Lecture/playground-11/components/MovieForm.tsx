"use client";

import { Movie } from "@/lib/movie.types";
import { useActionState } from "react";

interface MovieFormProps {
  initialMovie?: Movie;
  saveLabel: string;
  actionReducer: (initialData: void | { error: string }, formData: FormData) => Promise<void | { error: string }>;
}

export default function MovieForm({ initialMovie, saveLabel, actionReducer }: MovieFormProps) {
  const [state, action, pending] = useActionState(actionReducer, undefined);

  return (
    <form className="mt-4 space-y-4" action={action}> {/* onSubmit = {handleSubmit} */}
      {initialMovie && (
        <input type="hidden" name="id" value={initialMovie.id} />
      )}

      <label className="block">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          name="title"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          disabled={pending}
          defaultValue={initialMovie?.title}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Description</span>
        <textarea
          name="description"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          disabled={pending}
          defaultValue={initialMovie?.description}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Watched</span>
        <input
          type="checkbox"
          name="watched"
          className="ml-2 rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 focus:ring-opacity-50"
          disabled={pending}
          defaultChecked={initialMovie?.watched}
        />
      </label>

      {state?.error && (
        <div className="text-red-500">{state.error}</div>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        disabled={pending}
      >
        {pending ? "Saving..." : saveLabel}
      </button>
    </form>
  )
}