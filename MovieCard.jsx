function MovieCard({ moviesList }) {
    const handleAddFavorites = () => {
        const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const isAlreadyFavorite = existingFavorites.some(
            (movie) => movie.id === moviesList.id
        );

        if (!isAlreadyFavorite) {
            const updatedFavorites = [...existingFavorites, moviesList];
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            alert(`${moviesList.name} added to favourites`);
        } else {
            alert(`${moviesList.name} is already in favourites`);
        }
    };

    return (
        <div className="container">
            <div className="movie-card">
                <img
                    src={moviesList.image?.medium}
                    alt={moviesList.name}
                    className="movie-poster"
                />
            </div>
            <div className="movie-description">
                <h3 className="movie-title">{moviesList.name}</h3>
                <p className="release-date">{moviesList.premiered}</p>
                <button className="like-button" onClick={handleAddFavorites}>
                    Add To Favorites
                </button>
            </div>
        </div>
    );
}

export default MovieCard;
