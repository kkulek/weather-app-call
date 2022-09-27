const API_KEY = '1f6388158cf04dfeafd191014222709';
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';

export async function getWeatherFromApi(city) {
    const config = {
        key: API_KEY,
        q: city,
        days: 10,
        aqi: 'no',
        alerts: 'no'
    }

    const response = await fetch(`${BASE_URL}?${new URLSearchParams(config)}`);
    return response.json();
}