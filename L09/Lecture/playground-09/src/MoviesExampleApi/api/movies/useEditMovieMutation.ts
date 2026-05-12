import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "../../../moviesData";
import { editMovie } from "../../api";
import moviesKeys from "../keys";

const useEditMovieMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, title, description, categories }: Movie) =>
      editMovie(id, title, description, categories),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: moviesKeys.lists() });
      queryClient.invalidateQueries({ queryKey: moviesKeys.detail(id) });
    },
  });
};

export default useEditMovieMutation;
