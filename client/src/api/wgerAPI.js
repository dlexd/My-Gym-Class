import axios from 'axios';

const api = axios.create({
    baseURL: 'https://wger.de/api/v2/',
    headers: {
        Authorization: '20504f4b12311bb2896616b5942628c2d9374626',
    },
});

export default api;