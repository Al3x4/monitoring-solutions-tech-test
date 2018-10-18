import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'

import Movie from './components/Movie'

const baseUrl = process.env.PUBLIC_URL

class App extends Component {
  state = {
    movieData : [],
    isHome : true
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
            render={() => <h1>DOES THIS EVEN WORK? YES</h1>}
          />
        </main>

      </div>
    );
  }
}

export default App;
