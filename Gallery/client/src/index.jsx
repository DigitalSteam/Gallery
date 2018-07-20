import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    } 
  }

  render () {
    return (
        <div className='background'>
          <div className='block'>
            <div className='row'>
              <div className='col left'>

                <div id='video'>
                </div>

                <div id='list'>
                  <div id='scroll'>              
                  </div>
                </div>

                <div id='slider'>
                </div>

              </div>

              <div className='col right'>
                <div id='game_header'>
                  <img className="header" src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1525818062" />
                </div>
                <div id='description'>
                  Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has truly taken on a life of its own.
                </div>
                <div id='reviews'>
                </div>
              </div>
            </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));