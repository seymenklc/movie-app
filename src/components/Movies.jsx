// hooks
import { useFetchMovies } from '../hooks/useFetchMovies';
import { usePagination } from '../hooks/usePagination';
// components
import Movie from './Movie';
import Spinner from './Spinner';
import Pagination from './Pagination';

export default function Movies() {
    const { data, loading, error } = useFetchMovies();
    const { currentItems, pageNums, paginate } = usePagination(data);

    return !loading ? (
        <div>
            <div className='flex justify-between max-w-5xl mx-auto mt-5'>
                <h1 className='title'>Movies</h1>
                <Pagination paginate={paginate} pageNums={pageNums} />
            </div>
            <div className='cards-container'>
                {error && <p className='text-error text-2xl font-bold'>{error}</p>}
                {!data && <p className='info'>Your search does not match any movies.</p>}
                {data && currentItems.map(movie => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    ) : <Spinner />;
}