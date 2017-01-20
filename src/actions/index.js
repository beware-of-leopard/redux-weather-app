import axios from 'axios'
const API_KEY = '83a1724022531b86949d4faee73b0498'

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url)
		
	return ({
		type: FETCH_WEATHER,
		payload: request
	})
}