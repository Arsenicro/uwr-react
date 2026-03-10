export interface Movie {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface AddMovieAction {
  type: "ADD_MOVIE";
  payload: {
    title: string;
    description: string;
    isCompleted: boolean;
  };
}

interface ToggleMovieAction {
  type: "TOGGLE_MOVIE";
  payload: {
    id: string;
  };
}

interface DeleteMovieAction {
  type: "DELETE_MOVIE";
  payload: {
    id: string;
  };
}

interface UpdateMovieAction {
  type: "UPDATE_MOVIE";
  payload: {
    id: string;
    title: string;
    description: string;
  };
}

export type MovieAction =
  | AddMovieAction
  | ToggleMovieAction
  | DeleteMovieAction
  | UpdateMovieAction;
