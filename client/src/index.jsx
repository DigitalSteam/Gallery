import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
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
              <Description  />
            </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));