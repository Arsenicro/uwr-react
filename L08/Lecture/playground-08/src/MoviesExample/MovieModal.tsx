import { Autocomplete, Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { categories, type Category } from "../moviesData";

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
}

function MovieModal({ open, onClose, onSave, saveText, initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(initialData?.categories || []);
  const [error, setError] = useState("");

  function handleSave() {
    if (title.trim() === "" || description.trim() === "") {
      setError("Title and description are required.");
      return;
    }
    onSave(title, description, selectedCategories);
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Movie Description"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mt: 2 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Autocomplete
          options={categories}
          getOptionLabel={(option) => option}
          multiple
          value={selectedCategories}
          onChange={(_, newValue) => setSelectedCategories(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categories"
              placeholder="Select categories"
              sx={{ mt: 2 }}
            />
          )}
        />
        {error && <Box sx={{ color: 'error.main', mt: 1 }}>{error}</Box>}
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSave}>{saveText}</Button>
        <Button variant="text" color="secondary" sx={{ mt: 2, ml: 2 }} onClick={onClose}>Cancel</Button>
      </Box>
    </Modal>
  )
}

export default MovieModal;