import { useEffect, useState } from "react";
import { baseURL, api_key } from "../constants/api";
import axios from "axios";
// hooks
import { useStore } from "../store";

export function useFetchMovies() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { setMovies, movies, queryString } = useStore();

    const query = '?s=' + queryString;

    useEffect(() => {
        setLoading(true);
        axios
            .get(baseURL + query + api_key)
            .then(res => setMovies(res.data.Search))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [queryString]);

    return { data: movies, loading, error };
}