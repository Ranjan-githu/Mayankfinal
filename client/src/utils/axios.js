import axios from 'axios';

// Use environment variable in production, fallback to localhost for development
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

axios.defaults.baseURL = baseURL;

export default axios;
