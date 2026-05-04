import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { categories, type Category } from "../moviesData";
import { useMoviesStore } from "./moviesStore";

interface MovieFormProps {
  mode: "create" | "edit";
  onClose: () => void;
  initialData?: {
    id?: string;
    title: string;
    description: string;
    categories: Category[];
  };
}

function MovieForm({ mode, onClose, initialData }: MovieFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(initialData?.categories || []);
  const [validationError, setValidationError] = useState("");

  const createMovie = useMoviesStore((state) => state.createMovie);
  const createStatus = useMoviesStore((state) => state.createStatus);
  const createError = useMoviesStore((state) => state.createError);

  const updateMovie = useMoviesStore((state) => state.updateMovie);
  const editModalId = useMoviesStore((state) => state.editModalId);
  const editStatus = useMoviesStore((state) => state.editStatus);
  const editError = useMoviesStore((state) => state.editError);

  const loading = mode === "create" ? createStatus === "loading" : editStatus === "loading";
  const apiError = mode === "create" ? createError : editError;
  const saveText = mode === "create" ? "Add Movie" : "Edit Movie";

  async function handleSave() {
    if (title.trim() === "" || description.trim() === "") {
      setValidationError("Title and description are required.");
      return;
    }

    if (mode === "create") {
      const isSuccess = await createMovie(title, description, selectedCategories);
      if (isSuccess) {
        onClose();
      }
      return;
    }

    if (!editModalId) {
      setValidationError("Cannot edit movie: missing movie id.");
      return;
    }

    const isSuccess = await updateMovie(editModalId, title, description, selectedCategories);
    if (isSuccess) {
      onClose();
    }
  }

  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }}>
      <TextField
        fullWidth
        label="Movie Title"
        variant="outlined"
        value={title}
        onChange={(e) => {
          if (validationError) {
            setValidationError("");
          }
          setTitle(e.target.value);
        }}
      />
      <TextField
        fullWidth
        label="Movie Description"
        variant="outlined"
        multiline
        rows={4}
        sx={{ mt: 2 }}
        value={description}
        onChange={(e) => {
          if (validationError) {
            setValidationError("");
          }
          setDescription(e.target.value);
        }}
      />
      <Autocomplete
        options={categories}
        getOptionLabel={(option) => option}
        multiple
        value={selectedCategories}
        onChange={(_, newValue) => {
          if (validationError) {
            setValidationError("");
          }
          setSelectedCategories(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Categories"
            placeholder="Select categories"
            sx={{ mt: 2 }}
          />
        )}
      />
      {validationError && <Box sx={{ color: 'error.main', mt: 1 }}>{validationError}</Box>}
      {apiError && <Box sx={{ color: 'error.main', mt: 1 }}>{apiError}</Box>}
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSave} loading={loading}>{saveText}</Button>
      <Button variant="text" color="secondary" sx={{ mt: 2, ml: 2 }} onClick={onClose} loading={loading}>Cancel</Button>
    </Box>
  );
}

export default MovieForm;