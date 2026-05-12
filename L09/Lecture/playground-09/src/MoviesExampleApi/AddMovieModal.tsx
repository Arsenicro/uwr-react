import { Modal } from "@mui/material";
import { type Category } from "../moviesData";
import MovieForm from "./MovieForm";
import useAddMovieMutation from "./api/movies/useAddMovieMutation";

interface Props {
  open: boolean;
  onClose: () => void;

}

function AddMovieModal({ open, onClose }: Props) {
  const addMovieMutation = useAddMovieMutation();
  async function handleAddMovie(title: string, description: string, categories: Category[]) {
    addMovieMutation.mutate({ title, description, categories }, {
      onSuccess: () => {
        onClose();
      }
    });
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MovieForm onSave={handleAddMovie} onClose={onClose} saveText="Add Movie" apiLoading={addMovieMutation.isPending} apiError={addMovieMutation.error?.message} />
    </Modal>
  )
}

export default AddMovieModal;