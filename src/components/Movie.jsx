import { Link, useLocation } from "react-router-dom";
// hooks
import { useStore } from "../store";
// styles & assets
import { DeleteIcon } from "./DeleteIcon";

export default function Movie({ movie }) {
    const { setMovie, removeFavorite } = useStore();
    const { pathname } = useLocation();

    const path = pathname === '/';

    const handleClick = () => setMovie(movie);
    const handleDelete = () => removeFavorite(movie.imdbID);

    const trimTitle = () => {
        if (movie) {
            if (movie.Title.length > 27) {
                return <span>{movie.Title.substring(0, 27)}...</span>;
            } else {
                return movie.Title;
            }
        };
    };

    return (
        <div className="card card-side bg-base-300 shadow-xl max-w-lg">
            <figure><img className="h-62 w-64" src={movie.Poster} alt={movie.Title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{trimTitle()}</h2>
                <h3>{movie.Year} - <span className="uppercase">{movie.Type}</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolore!</p>
                <div className="card-actions justify-end">
                    {path && (
                        <Link to={`/movies/${movie.imdbID}`} onClick={handleClick} className="btn btn-base-200">
                            Details
                        </Link>
                    )}
                    {!path && (
                        <button onClick={handleDelete} className="btn btn-base-200">
                            <DeleteIcon />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}