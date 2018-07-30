import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      thumbnails: [1,2,3,4,5,6,7,8,9,10],
      repos: []
    };
    this.drag = this.drag.apply(this);

  }

  drag(e) {

  }

  render () {
    return (
        <div className='background'>
          <div className='block'>
            <div className='row'>
              <div className='col left'>

                <div>
                  <embed id='video' src="https://steamcdn-a.akamaihd.net/steam/apps/256720476/movie480.webm?t=1529548698" />
                </div>

                <div id='list'>
                  <div id='scroll'> 
                    {
                      this.state.thumbnails.map( (i) => {
                        var url = "https://s3-us-west-1.amazonaws.com/steamgallery/pubg"+i+".jpg";
                        return <img className="thumbnails" key={i} src={url} />
                      })
                    }
                  </div>
                </div>
                
                  <span className="toggleleft"> &lt;  </span>
                  <input type="range" min="1" max="100" className="slider" />
                  <span className="toggleright"> &gt; </span>
                
                
                
              </div>
              <Description  />
            </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));