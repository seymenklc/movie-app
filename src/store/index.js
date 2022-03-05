import create from "zustand";

export const useStore = create(set => ({
    movies: [],
    favorites: [],
    movie: null,
    queryString: 'Avengers',

    setMovies: (data) => set(state => ({ movies: data })),
    setMovie: (data) => set(state => ({ movie: data })),
    setQueryString: (query) => set(state => ({ queryString: query })),

    setFavorites: (movie) => set(state => {
        const isMovieExist = state.favorites.find(mov => mov.imdbID === movie.imdbID);
        if (isMovieExist) return;
        return { favorites: [...state.favorites, movie] };
    }),
    removeFavorite: (id) => set(state => {
        return { favorites: state.favorites.filter(movie => movie.imdbID !== id) };
    })
}));