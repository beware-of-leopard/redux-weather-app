import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SparklinesGenerator} from '../components/sparklines_component'

class WeatherList extends Component{

	getCities(){

		if(this.props.cities){
			return (
				this.props.cities.reducerForecast.map((city) => {

					const temps = city.list.map((cityWeather)=>{
						return cityWeather.main.temp;
					})

					const pressures = city.list.map((cityWeather)=>{
						return cityWeather.main.pressure;
					})

					const humidity = city.list.map((cityWeather)=>{
						return cityWeather.main.humidity;
					})

					return (
						<tr>
							<td style={{width: 200}}>{city.city.name}</td>
							<td style={{width: 200}}>
								<SparklinesGenerator height={120} width={180} data={temps} color="red" units="K" />
							</td>
							<td style={{width: 200}}>
								<SparklinesGenerator height={120} width={180} data={pressures} color="green" units="hPa" />
							</td>
							<td style={{width: 200}}>
								<SparklinesGenerator height={120} width={180} data={humidity} color="blue" units="%" />
							</td>
						</tr>
					)
					
				})
			)
		}
		
	}

	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.cities.reducerForecast.length > 0 ? this.getCities() : "Search for a city"}
				</tbody>
		</table>)
	}
}

function mapStateToProps(state){
	return {
		cities: state
	}
}

export default connect(mapStateToProps)(WeatherList)