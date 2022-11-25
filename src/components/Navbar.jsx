import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// hooks
import { useStore } from "../store";
// styles & assets
import { FavoriteIcon } from "./FavoriteIcon";

export default function Navbar() {
    const [query, setQuery] = useState('');
    const { setQueryString } = useStore();

    const resetQuery = () => setQuery('');

    const handleChange = (e) => setQuery(e.target.value);

    const handleClick = () => {
        if (!query) return;
        setQueryString(query);
    };

    useEffect(() => {
        setQueryString(query);
    }, [query]);

    useEffect(() => {
        setQueryString('Avengers');
    }, []);

    return (
        <div className="navbar bg-neutral rounded-md mt-3">
            <div className="flex-1">
                <Link to='/' className="nav-btn" onClick={resetQuery}>
                    Movies App
                </Link>
            </div>
            <div className="flex-none gap-2">
                <Link to='/favorites' className='nav-btn'><FavoriteIcon /></Link>
                <div className="form-control flex flex-row">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered text-lg"
                        value={query}
                        onChange={handleChange}
                    />
                    <Link to='/' onClick={handleClick} className="nav-btn ml-2">Search</Link>
                </div>
            </div>
        </div>
    );
}