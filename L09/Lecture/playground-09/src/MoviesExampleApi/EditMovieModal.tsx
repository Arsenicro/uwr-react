import { Modal } from "@mui/material";
import { type Category } from "../moviesData";
import MovieForm from "./MovieForm";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (title: string, description: string, categories: Category[]) => void;
  initialData?: {
    title: string;
    description: string;
    categories: Category[];
  };
  apiLoading?: boolean;
  apiError?: string;
}

function EditMovieModal({ open, onClose, onSave, initialData, apiLoading, apiError }: Props) {


  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MovieForm
        onSave={onSave}
        initialData={initialData}
        onClose={onClose}
        saveText="Edit Movie"
        apiLoading={apiLoading}
        apiError={apiError}
      />
    </Modal>
  )
}

export default EditMovieModal;