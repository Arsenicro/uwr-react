import { Button, Stack } from "@mui/material";
import { useShallow } from "zustand/react/shallow";
import { useMoviesStore } from "./moviesStore";

function MovieAppToolbar() {
  const { createStatus, editStatus, openAddModal } = useMoviesStore(
    useShallow((state) => ({
      createStatus: state.createStatus,
      editStatus: state.editStatus,
      openAddModal: state.openAddModal,
    })),
  );

  const isMutationLoading = createStatus === "loading" || editStatus === "loading";

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={openAddModal}
        disabled={isMutationLoading}
      >
        Add Movie
      </Button>
    </Stack>
  );
}

export default MovieAppToolbar;