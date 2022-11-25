import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, api_key } from "../constants/api";

export function useFetchMovie(id) {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const query = '?i=' + id;

    useEffect(() => {
        setLoading(true);
        axios
            .get(baseURL + query + api_key)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [id]);

    return { data, loading, error };
}