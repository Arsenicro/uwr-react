import NavLink from "./NavLink";

export default function NavLinks() {
  return (
    <nav className="w-full max-w-3xl p-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">Movie List</h1>
      <div className="flex items-center space-x-4">
        <NavLink href="/">Home</NavLink>
        <span className="mx-2 text-gray-400">|</span>
        <NavLink href="/movies">Movies</NavLink>

        <span className="mx-2 text-gray-400">|</span>
        <NavLink href="/movies/add">
          Add Movie
        </NavLink>
      </div>
    </nav>
  )
}