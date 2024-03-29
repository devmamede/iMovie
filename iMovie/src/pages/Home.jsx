import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/Searchbar";

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <footer>
        <h2>Não encontrou o título que procurava?</h2>
        <SearchBar />

        <h3 className="authorship">
          Developed by{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/isac-mamede/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dev.mamede
            </a>
          </span>
        </h3>
      </footer>
    </div>
  );
};

export default Home;
