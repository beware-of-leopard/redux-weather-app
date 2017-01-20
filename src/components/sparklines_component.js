import React from 'react'
import _ from 'lodash'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

export const SparklinesGenerator = (props) => {

	let {height, width, data, color, units} = props

	function average(data){
		return _.round(_.sum(data)/data.length)
	}

	return (
		<Sparklines height={height} width={width} data={data}>
			<SparklinesLine color={color}/>
			<SparklinesReferenceLine type="avg"/>
			<div>{average(data)}{units}</div>
		</Sparklines>
	)
}

