import { createContext, useContext, useReducer } from "react";
import { movieReducer } from "../movieReducer";
import type { Movie } from "../types";

interface MovieContextType {
  movies: Movie[];
  addMovie: (title: string, description: string) => void;
  toggleMovie: (id: string) => void;
  deleteMovie: (id: string) => void;
  updateMovie: (id: string, updatedTitle: string, updatedDescription: string) => void;
}


const MovieContext = createContext<MovieContextType | undefined>(undefined);

const MovieProvider = ({ children }: React.PropsWithChildren) => {
  const [movies, dispatch] = useReducer(movieReducer, [
    {
      id: '1',
      title: 'The Lion King',
      description: 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny.',
      isCompleted: true,
    },
    {
      id: '2',
      title: 'Frozen',
      description: 'When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Moana',
      description: 'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana\'s island, she answers the Ocean\'s call to seek out the Demigod to set things right.',
      isCompleted: false,
    }
  ]);

  const handleAddMovie = (title: string, description: string) => {
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        title,
        description,
        isCompleted: false,
      }
    })
  };

  const handleToggleMovie = (id: string) => {
    dispatch({
      type: 'TOGGLE_MOVIE',
      payload: { id }
    })
  };

  const handleDeleteMovie = (id: string) => {
    dispatch({
      type: 'DELETE_MOVIE',
      payload: { id }
    })
  };

  const handleUpdateMovie = (id: string, updatedTitle: string, updatedDescription: string) => {
    dispatch({
      type: 'UPDATE_MOVIE',
      payload: {
        id,
        title: updatedTitle,
        description: updatedDescription,
      }
    })
  };

  return (<MovieContext.Provider value={{ movies, addMovie: handleAddMovie, toggleMovie: handleToggleMovie, deleteMovie: handleDeleteMovie, updateMovie: handleUpdateMovie }}>
    {children}
  </MovieContext.Provider>)
}

const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}

export { MovieContext, MovieProvider, useMovieContext };
