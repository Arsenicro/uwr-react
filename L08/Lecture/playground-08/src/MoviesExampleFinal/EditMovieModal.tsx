import { Modal } from "@mui/material";
import MovieForm from "./MovieForm";
import { useMoviesStore } from "./moviesStore";

function EditMovieModal() {
  const movies = useMoviesStore((state) => state.movies);
  const editModalId = useMoviesStore((state) => state.editModalId);
  const closeEditModal = useMoviesStore((state) => state.closeEditModal);

  const initialData = editModalId
    ? movies.find((movie) => movie.id === editModalId)
    : undefined;

  return (
    <Modal
      open={!!editModalId}
      onClose={closeEditModal}
      aria-labelledby="edit-movie-modal-title"
      aria-describedby="edit-movie-modal-description"
    >
      <MovieForm
        key={editModalId}
        mode="edit"
        initialData={initialData}
        onClose={closeEditModal}
      />
    </Modal>
  );
}

export default EditMovieModal;