import axios from "axios";

const API_KEY = '048b78666f0472fc710ab69d71249f35';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export const getWeather = (location) => {
    return axios.get(API_URL, {
        params: {
            q: location,
            appid: API_KEY,
            units: 'metric',
        },
    });
};
