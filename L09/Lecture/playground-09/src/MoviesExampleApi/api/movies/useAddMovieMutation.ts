import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "../../../moviesData";
import { addMovie } from "../../api";
import moviesKeys from "../keys";

const useAddMovieMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, description, categories }: Omit<Movie, "id">) =>
      addMovie(title, description, categories),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: moviesKeys.lists() });
    },
  });
};

export default useAddMovieMutation;
