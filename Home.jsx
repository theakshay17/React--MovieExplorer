import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Filter movies by searchQuery
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-area">
        <input
          type="text"
          placeholder="Search for web series..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
        <h2 className="text"><span>Today </span>Trending</h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="moviecard-container">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <MovieCard moviesList={movie} key={index} />
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
