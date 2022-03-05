import Movie from "../components/Movie";
import { useStore } from "../store";

export default function Favorites() {
    const { favorites } = useStore();

    return (
        <div>
            <h1 className="title">Favorites</h1>
            <div className="cards-container">
                {favorites.length < 1 && <p className="info">Start adding your favorites!</p>}
                {favorites && favorites.map(movie => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}