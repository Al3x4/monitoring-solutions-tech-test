import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import moment from 'moment'
import './App.css'

import Movie from './components/Movie'
import Timeseries from './components/Timeseries'


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
        timestamp: moment(datum.timestamp).format('LTS D MMM'),
        value:  datum.value
      })
    })

    return formattedData;
  }

  componentDidMount() {
    this.fetchMovieData();
    this.fetchTimestampData();
  }

  render() {
    return (
      <div className="App">
        <aside>
          <ul>
            <li>
              <Link 
                to={baseUrl + '/'}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link 
                to={baseUrl + 'timeline'}>
                Timeline
              </Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route 
            exact path={baseUrl + '/'}
            render={() => this.state.movieData.map(movie => <Movie key={movie.name} movie={movie} />)}
          />
          <Route 
            exact path={baseUrl + '/timeline'}
            render={() => <Timeseries data={this.state.timeData}/>}
          />
        </main>

      </div>
    );
  }
}

export default App;
