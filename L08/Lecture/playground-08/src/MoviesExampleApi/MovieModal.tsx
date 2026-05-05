import { Modal } from "@mui/material";
import { type Category } from "../moviesData";
import MovieForm from "./MovieForm";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (title: string, description: string, categories: Category[]) => void;
  saveText: string;
  initialData?: {
    title: string;
    description: string;
    categories: Category[];
  };
  apiLoading?: boolean;
  apiError?: string;
}

function MovieModal({ open, onClose, onSave, saveText, initialData, apiLoading, apiError }: Props) {
  /* 
  Źle!
  
    useEffect(() => {
      if (open) {
        setTitle(initialData?.title || "");
        setDescription(initialData?.description || "");
        setSelectedCategories(initialData?.categories || []);
        setError("");
      }
    }, [initialData, open])
   */

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MovieForm onSave={onSave} initialData={initialData} onClose={onClose} saveText={saveText} apiLoading={apiLoading} apiError={apiError} />
    </Modal>
  )
}

export default MovieModal;