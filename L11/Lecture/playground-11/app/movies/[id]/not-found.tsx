import Link from "next/link";

export default function MovieNotFound() {
  return (
    <div className="text-red-500">
      Movie not found. Please check the URL and try again.
      <Link href="/movies" className="ml-2 text-blue-500 hover:underline">
        Back to Movies List
      </Link>
    </div>
  );
}