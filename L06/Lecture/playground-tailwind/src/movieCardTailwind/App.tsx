import { useState } from "react";
import { moviesData } from "../moviesData";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${theme}`}>
      <button className="
      block mx-auto my-5 px-4 py-2 border-2 border-gray-900 rounded-lg bg-gray-900 text-white font-semibold hover:bg-transparent hover:text-gray-900 transition-colors duration-200
      dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-transparent dark:hover:text-gray-100"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >Toggle Theme</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {moviesData.map(movie => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;