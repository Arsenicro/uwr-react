import type { Movie } from "../moviesData";
import Tag from "./Tag";


function MovieCard({ title, description, categories, image }: Movie) {
  return (
    <div className="
    max-w-sm mx-auto my-10 rounded-lg overflow-hidden bg-white text-gray-900 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300
    dark:bg-gray-800 dark:text-gray-100
    ">
      <img
        className="w-full h-56 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Tag key={category} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard; 