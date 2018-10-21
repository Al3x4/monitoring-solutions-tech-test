import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import moment from 'moment'
import './App.css'

import Movie from './components/Movie'
import AllGraphs from './components/AllGraphs'

const baseUrl = process.env.PUBLIC_URL

class App extends Component {
	state = {
		movieData : [],
		timeData : [],
		isHome : true
	}

	fetchMovieData = () => {
		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/assets')
		.then(response => response.json())
		.then(movieData => this.setState({movieData}));
	}

	fetchTimestampData = () => {
		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
		.then(response => response.json())
		.then(timeData => this.setState({timeData: this.formatTimeseriesData(timeData)}));
	}

	formatTimeseriesData = (dataArray) => {
		let formattedData = [];
		dataArray.map(datum => {
			formattedData.push({
				timestamp: moment(datum.timestamp).format('LTS'),
				value:  datum.value
			})
		})

		return formattedData;
	}

	componentDidMount() {
		this.fetchMovieData();
		this.fetchTimestampData();
	}

	handleClick(){
		document.querySelector('aside').classList.toggle('open')
	}

	render() {
		return (
			<div className="App">
					<div className="hamburger" onClick={this.handleClick}>
						<div className="hamburger-line"></div>
						<div className="hamburger-line"></div>
						<div className="hamburger-line"></div>
					</div>
				<aside>
					<Link
						onClick={this.handleClick}
						className="link" 
						to={baseUrl + '/'}>
						Movies
					</Link>
					<Link
							onClick={this.handleClick}
						className="link" 
						to={baseUrl + 'timeline'}>
						Timeline
					</Link>
				</aside>
				<main>
					<Route 
						exact path={baseUrl + '/'}
						render={() => this.state.movieData.map(movie => <Movie key={movie.name} movie={movie}/>)}/>
					<Route 
						exact path={baseUrl + '/timeline'}
						render={() => <AllGraphs movieData={this.state.movieData} timeData={this.state.timeData}/>}/>
				</main>

			</div>
		);
	}
}

export default App;
