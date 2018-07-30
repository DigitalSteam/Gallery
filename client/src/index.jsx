import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';

const frameWidth = 122;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      thumbnails: [1,2,3,4,5,6,7,8,9,10],
      repos: [],
      curframe: 1,
      scrollleft: -10
    };
    this.syncPosition = this.syncPosition.bind(this);
    this.slide = this.slide.bind(this);
    this.selectFrame = this.selectFrame.bind(this);
    this.prevFrame = this.prevFrame.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
  }



  syncPosition() {

  }

  selectFrame(e) {
    var len = e.target.src.length;
    this.setState({
      curFrame: e.target.src[len-5]
    });
    console.log(this.state.curFrame);
  }

  prevFrame(e) {
    if(this.state.curFrame === 1) {
      this.setState({
        curFrame : this.state.thumbnails.length - 1
      });
    } else {
      this.setState({
        curFrame : this.state.curFrame - 1
      });
    }
    console.log(this.state.curFrame);
  }

  nextFrame(e) {
    if(this.state.curFrame === this.thumbnails.length-1) {
      this.setState({
        curFrame : 1
      });
    } else {
      this.setState({
        curFrame : this.state.curFrame + 1
      });
    }
    console.log(this.state.curFrame);
  }

  slide(e) {
    console.log(e.target.value);
    this.setState({
      scrollleft: -10 - ( (10 + frameWidth) * (e.target.value - 1) * (this.state.thumbnails.length - 5) ) / 99 
    });
    console.log(this.state.scrollleft);
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
                  <div id='scroll' style={{left:this.state.scrollleft+'px'}}> 
                    {
                      this.state.thumbnails.map( (i) => {
                        var url = "https://s3-us-west-1.amazonaws.com/steamgallery/pubg"+i+".jpg";
                        return <img onClick={this.selectFrame} className="thumbnails" key={i} src={url} />
                      })
                    }
                  </div>
                </div>
                
                  <span className="toggleleft" onClick={this.prevFrame}> &lt;  </span>
                  <input type="range" min="1" max="100" className="slider" onChange={this.slide}/>
                  <span className="toggleright" onClick={this.nextFrame}> &gt; </span>
                
                
                
              </div>
              <Description  />
            </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));