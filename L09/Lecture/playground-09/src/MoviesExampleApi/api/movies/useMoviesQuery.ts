import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../../../moviesData";
import { fetchMovies } from "../../api";
import moviesKeys from "../keys";

const useMoviesQuery = (search: string) => {
  return useQuery<Movie[]>({
    queryKey: moviesKeys.list(search),
    queryFn: () => fetchMovies(search),
  });
};

export default useMoviesQuery;
