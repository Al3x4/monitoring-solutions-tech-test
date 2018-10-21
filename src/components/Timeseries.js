import React, { Component } from 'react'
import { LineChart, CartesianGrid, Line, Tooltip, XAxis, YAxis, ResponsiveContainer} from 'recharts'

class Timeseries extends Component{




	render() {
		return (
			<ResponsiveContainer
				width="100%"
				height={500}
			>
				<LineChart data={this.props.data}
				  margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
				  <CartesianGrid strokeDasharray="3 3" vertical={false}/>
				  <XAxis 
				  	dataKey="timestamp" 
				  />
				  <YAxis 
				  	dataKey="value"
				  	axisLine={false}
				  	tickLine={false}
				  />
				  <Tooltip 
				  	isAnimationActive={false}
				  />
				  <Line type="monotone" dataKey="value" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		)
	}
}

export default Timeseries