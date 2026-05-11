import { Modal } from "@mui/material";
import { type Category } from "../moviesData";
import MovieForm from "./MovieForm";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (title: string, description: string, categories: Category[]) => void;

  apiLoading?: boolean;
  apiError?: string;
}

function AddMovieModal({ open, onClose, onSave, apiLoading, apiError }: Props) {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MovieForm onSave={onSave} onClose={onClose} saveText="Add Movie" apiLoading={apiLoading} apiError={apiError} />
    </Modal>
  )
}

export default AddMovieModal;