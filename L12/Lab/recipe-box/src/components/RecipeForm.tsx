import { useState, type SubmitEvent } from "react";
import { useRecipes } from "../context/RecipeContext";

const fieldClassName =
  "mt-1 block w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-stone-900 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-teal-500 dark:focus:ring-teal-900";

export default function RecipeForm() {
  const { addRecipe } = useRecipes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = addRecipe(title, content);
    if (message) {
      setError(message);
      return;
    }

    setError(null);
    setTitle("");
    setContent("");
  };

  return (
    <form
      className="mb-8 space-y-4 rounded-2xl border-2 border-dashed border-teal-300 bg-white p-6 dark:border-teal-800 dark:bg-stone-900"
      onSubmit={handleSubmit}
    >
      <h2 className="font-serif text-xl font-bold text-teal-900 dark:text-teal-300">
        New recipe
      </h2>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
        Title
        <input
          type="text"
          name="title"
          className={fieldClassName}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError(null);
          }}
        />
      </label>

      <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
        Content
        <textarea
          name="content"
          className={`${fieldClassName} min-h-28 resize-y`}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
            setError(null);
          }}
        />
      </label>

      <button
        type="submit"
        className="rounded-full bg-teal-700 px-5 py-2.5 font-medium text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
      >
        Add recipe
      </button>
    </form>
  );
}
