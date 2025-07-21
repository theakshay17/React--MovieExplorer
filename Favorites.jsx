import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("Favorites:", favs); 
    setFavorites(favs);
  }, []);

  const handleRemoveFavorites =() =>{
    setFavorites([]);
  }

  return (
    <div className="favorites-container">
      {favorites.length > 0 ? (
        <div className="moviecard-container">
        <div className="favText">
          <h1 >Your Favorite Movies</h1>
          <button className="remove-favorites" onClick={handleRemoveFavorites}>Remove Favorites</button>
        </div>
          {favorites.map((movie, index) => (
            <MovieCard key={index} moviesList={movie} />
          ))}
        </div>
      ) : (
        <div className="no-fav-text">
          <h1>No Favorites yet</h1>
          <p>Add Some Of Your Favorite Movies Here...</p>
        </div>

      )}
    </div>
  );
}

export default Favorites;
