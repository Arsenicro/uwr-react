import { Modal } from "@mui/material";
import MovieForm from "./MovieForm";
import { useMoviesStore } from "./moviesStore";

function AddMovieModal() {
  const addModalOpen = useMoviesStore((state) => state.addModalOpen);
  const closeAddModal = useMoviesStore((state) => state.closeAddModal);

  return (
    <Modal
      open={addModalOpen}
      onClose={closeAddModal}
      aria-labelledby="add-movie-modal-title"
      aria-describedby="add-movie-modal-description"
    >
      <MovieForm
        key="add-movie-form"
        mode="create"
        onClose={closeAddModal}
      />
    </Modal>
  );
}

export default AddMovieModal;