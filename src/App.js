import React, { Component } from 'react';
import './App.css';

import Movie from './components/Movie'

class App extends Component {
  state = {
    movieData : []
  }

  fetchMovieData = () => {
    fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/assets')
    .then(response => response.json())
    .then(movieData => this.setState({movieData : movieData}));
  }

  componentDidMount() {
    this.fetchMovieData();
  }

  render() {
    return (
      <div className="App">
        <aside>
          <ul>
            <li className="selected"><a href="">Movies</a></li>
            <li><a href="">Timeline</a></li>
          </ul>
        </aside>

        <main>
          {this.state.movieData.map(movie => <Movie key={movie.name} movie={movie} />)}
        </main>

      </div>
    );
  }
}

export default App;
