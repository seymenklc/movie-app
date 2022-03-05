const API_KEY = import.meta.env.VITE_API_KEY;

const baseURL = 'https://www.omdbapi.com/';
const api_key = '&apikey=' + API_KEY;

export { baseURL, api_key };