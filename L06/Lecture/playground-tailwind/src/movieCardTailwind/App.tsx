import "./App.css";
import MovieCard from "./MovieCard";

function App() {

  return (
    <div>
      <button className="theme-toggle">Toggle Theme</button>
      <div className="movies-list">
        <MovieCard />
      </div>
    </div>
  );
}

export default App;