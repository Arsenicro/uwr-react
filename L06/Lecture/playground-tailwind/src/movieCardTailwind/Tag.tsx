import type { Category } from "../moviesData";



const categoryColors: Record<Category, string> = {
  fantasy: "bg-[#7c3aed] text-white",
  adventure: "bg-[#059669] text-white",
  family: "bg-[#d97706] text-white",
  musical: "bg-[#db2777] text-white",
  animation: "bg-[#3b82f6] text-white",
  drama: "bg-[#ef4444] text-white",
  comedy: "bg-[#f97316] text-white"
};

function Tag({ category }: { category: Category }) {
  return <span className={`${categoryColors[category]} px-3 py-1 rounded-full text-xs font-semibold`}>{category}</span>
}

export default Tag;