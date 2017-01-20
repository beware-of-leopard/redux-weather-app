import React, {Component} from 'react'
import {fetchWeather} from '../actions/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state = {
			search: ""
		}

		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	onFormSubmit(event){
		event.preventDefault()

		//fetch weather data
		this.props.fetchWeather(this.state.search)
		this.setState({search:""})
	}

	render(){
		return(
			<form 
				onSubmit={(event) => this.onFormSubmit(event)}
				className="input-group">
				<input 
					placeholder="Get a city's forecast" 
					className="form-control"
					style={{border: "1px solid black"}} 
					value={this.state.search} 
					onChange={(event) => this.setState({search: event.target.value}) 
				}/>
				<span className="input-group-btn">
					<button 
						type="submit"
						className="btn btn-secondary">
						Search
					</button>
				</span>
			</form>)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
