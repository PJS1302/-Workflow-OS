import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workflow-os.onrender.com/api',
});

export default api;

