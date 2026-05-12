import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "../../api";
import moviesKeys from "../keys";

const useSingleMovieQuery = (id: string) => {
  return useQuery({
    queryKey: moviesKeys.detail(id),
    queryFn: () => fetchMovie(id),
  });
};

export default useSingleMovieQuery;
