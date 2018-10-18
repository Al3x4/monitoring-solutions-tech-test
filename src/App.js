import React, { Component } from 'react';
import './App.css';

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
          <div className="movie">
            <div className="movie-assetImage"><img src="http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg" alt="Moana"/></div>
            <h2 className="movie-name">Moana</h2>
            <div className="movie-release">2016</div>
            <div className="movie-duration">198 minutes</div>
            <div className="movie-description">To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)</div>
            <div className="movie-footer">              
              <div className="movie-totalViews">8599</div>
              <div className="movie-provider">Sky Disney</div>
            </div>
          </div>
          <div className="movie">
            <div className="movie-assetImage"><img src="http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg" alt="Moana"/></div>
            <h2 className="movie-name">Moana</h2>
            <div className="movie-release">2016</div>
            <div className="movie-duration">198 minutes</div>
            <div className="movie-description">To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)</div>
            <div className="movie-footer">              
              <div className="movie-totalViews">8599</div>
              <div className="movie-provider">Sky Disney</div>
            </div>
          </div>
          <div className="movie">
            <div className="movie-assetImage"><img src="http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg" alt="Moana"/></div>
            <h2 className="movie-name">Moana</h2>
            <div className="movie-release">2016</div>
            <div className="movie-duration">198 minutes</div>
            <div className="movie-description">To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)</div>
            <div className="movie-footer">              
              <div className="movie-totalViews">8599</div>
              <div className="movie-provider">Sky Disney</div>
            </div>
          </div>
          <div className="movie">
            <div className="movie-assetImage"><img src="http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg" alt="Moana"/></div>
            <h2 className="movie-name">Moana</h2>
            <div className="movie-release">2016</div>
            <div className="movie-duration">198 minutes</div>
            <div className="movie-description">To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)</div>
            <div className="movie-footer">              
              <div className="movie-totalViews">8599</div>
              <div className="movie-provider">Sky Disney</div>
            </div>
          </div>
          <div className="movie">
            <div className="movie-assetImage"><img src="http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg" alt="Moana"/></div>
            <h2 className="movie-name">Moana</h2>
            <div className="movie-release">2016</div>
            <div className="movie-duration">198 minutes</div>
            <div className="movie-description">To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)</div>
            <div className="movie-footer">              
              <div className="movie-totalViews">8599</div>
              <div className="movie-provider">Sky Disney</div>
            </div>
          </div>
          <div className="movie">
            <div className="movie-assetImage"><img src="http://epgstatic.sky.com/epgdata/1.0/vodimage/0/0/Mas_moana.jpg" alt="Moana"/></div>
            <h2 className="movie-name">Moana</h2>
            <div className="movie-release">2016</div>
            <div className="movie-duration">198 minutes</div>
            <div className="movie-description">To save her island home a plucky Polynesian teen must set sail and journey into the great blue yonder. Oscar-nominated Disney animation with the voice of Dwayne Johnson. (2016)(107 mins)</div>
            <div className="movie-footer">              
              <div className="movie-totalViews">8599</div>
              <div className="movie-provider">Sky Disney</div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
