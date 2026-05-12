import { Box, CircularProgress, Modal } from "@mui/material";
import { type Category } from "../moviesData";
import MovieForm from "./MovieForm";
import useEditMovieMutation from "./api/movies/useEditMovieMutation";
import useSingleMovieQuery from "./api/movies/useSingleMovieQuery";

interface Props {
  id?: string;
  open: boolean;
  onClose: () => void;
}

function EditMovieModal({ id, open, onClose }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {!id ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <CircularProgress />
        </Box>
      ) : (
        <EditMovieModalContent id={id} onClose={onClose} />
      )}
    </Modal>
  )
}

interface EditMovieModalContentProps {
  id: string;
  onClose: () => void;

}

function EditMovieModalContent({ id, onClose }: EditMovieModalContentProps) {
  const singleMovieQuery = useSingleMovieQuery(id);
  const editMovieMutation = useEditMovieMutation();
  async function handleEditMovie(title: string, description: string, categories: Category[]) {
    await editMovieMutation.mutateAsync({ id: id, title, description, categories });
    onClose();
  }

  if (singleMovieQuery.isLoading) {
    return <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <CircularProgress />
    </Box>
  }

  return (<MovieForm
    onSave={handleEditMovie}
    initialData={singleMovieQuery.data}
    onClose={onClose}
    saveText="Edit Movie"
    apiLoading={editMovieMutation.isPending}
    apiError={editMovieMutation.error?.message}
  />)
}

export default EditMovieModal;