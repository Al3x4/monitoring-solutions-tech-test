import React, { Component } from 'react'
import Timeseries from './Timeseries'
import ViewsStackedBarChart from './ViewsStackedBarChart'

class AllGraphs extends Component {
	render() {
		return (
			<div className="graph-container">
				
				<div className="graph">			
					<Timeseries name={"Timeseries Random Data"} data={this.props.timeData}/>
				</div>
				<div className="graph">
					<ViewsStackedBarChart name={"Movie Views"} data={this.props.movieData}/>
				</div>
				
			</div>

		)
	}
}

export default AllGraphs