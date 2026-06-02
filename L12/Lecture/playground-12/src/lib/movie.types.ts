export interface Movie {
  id: string;
  title: string;
  description: string;
  watched: boolean;
}

interface AddMovieAction {
  type: "ADD_MOVIE";
  payload: {
    title: string;
    description: string;
    watched: boolean;
  };
}

interface ToggleWatchedAction {
  type: "TOGGLE_WATCHED";
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

export type MovieAction = AddMovieAction | ToggleWatchedAction | DeleteMovieAction;

export type WatchedFilter = "all" | "watched" | "not-watched";
