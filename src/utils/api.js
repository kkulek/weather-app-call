const API_KEY = '50ed3e63ebab4da5b7e71105222910';
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';


export async function getWeatherFromApi(city) {
    const config = {
        key: API_KEY,
        q: city,
        days: 7,
        aqi: "no",
        alerts: "no"
    }

    const response = await fetch(`${BASE_URL}?${new URLSearchParams(config)}`)
        .catch((error) => {
            console.log(error)
        })
    return response.json();
}

// TODO status code handling