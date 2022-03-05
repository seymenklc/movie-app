import { useNavigate, useParams } from "react-router-dom";
// hooks
import { useStore } from "../store";
import { useFetchMovie } from "../hooks/usFetchMovie";
import { handleToast } from "../utils/handleToast";
// components
import Spinner from '../components/Spinner';

export default function MovieDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { setFavorites, favorites, removeFavorite } = useStore();
    const { data: movie, error, loading } = useFetchMovie(id);

    const genres = movie?.Genre?.split(',');
    const isFavorited = favorites?.map(mov => mov.imdbID).includes(movie.imdbID);

    const handleRemove = () => {
        removeFavorite(movie.imdbID);
        handleToast('Removed, Redirecting...', () => navigate('/'));
    };

    const handleAdd = () => {
        setFavorites(movie);
        handleToast('Added, Redirecting...', () => navigate('/favorites'));
    };

    return !loading && movie ? (
        <div className="card card-side bg-base-300 shadow-xl mt-12">
            {error && <p className="">{error}</p>}
            <figure><img className="h-96 w-auto" src={movie.Poster} alt={movie.Title} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{movie.Title}</h2>
                <h3 className="text-xl font-semibold">Released: {movie.Released} - {movie.Country}</h3>
                <h4 className="text-lg font-semibold">IMDB Rating: {movie.imdbRating} - Box Office: {movie.BoxOffice}</h4>
                <p className="font-medium">Cast: <span className="font-semibold">{movie.Actors}</span></p>
                <p className="text-lg">{movie.Plot}</p>
                <div className="card-actions justify-between items-center">
                    <div>
                        {movie && genres.map(genre => (
                            <span key={genre} className="badge ml-2">#{genre}</span>
                        ))}
                    </div>
                    {!isFavorited && (
                        <button className="btn btn-base-200" onClick={handleAdd}>
                            Add To Favorites
                        </button>
                    )}
                    {isFavorited && (
                        <button className="btn btn-base-200" onClick={handleRemove}>
                            Remove From Favorites
                        </button>
                    )}
                </div>
            </div>
        </div>
    ) : <Spinner />;
}