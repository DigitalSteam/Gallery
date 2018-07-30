import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
import Thumbnail from './Thumbnail.jsx';


const frameWidth = 122;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      thumbnails: [1,2,3,4,5,6,7,8,9,10],
      videos: [1,2],
      images: [3,4,5,6,7,8,9,10],
      curframe: 1,
      scrollleft: -10
    };
    this.syncPosition = this.syncPosition.bind(this);
    this.slide = this.slide.bind(this);
    this.selectFrame = this.selectFrame.bind(this);
    this.prevFrame = this.prevFrame.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
    this.selectScrollLeft = this.selectScrollLeft.bind(this);
  }

  componentDidMount() {
    setInterval(this.nextFrame, 4000);
  }

  syncPosition() {

  }


  selectFrame(val) {
    if(val === 1){

    }
    this.setState({
        curframe: val
    });
    var curLeft = this.state.scrollleft - 10 + (val - 1) * (frameWidth + 10);
    if( curLeft < 0 || curLeft > 4*(frameWidth + 10)){
     this.setState({
      scrollleft: -10 - (val - 1) * (frameWidth + 10)
     });
    }
  }

  prevFrame() {
    if(this.state.curframe === 1) {
      this.selectFrame(this.state.thumbnails.length);
    } else {
      this.selectFrame(Number(this.state.curframe) - 1);
    }
    console.log(this.state.curframe);
  }

  nextFrame() {
    if(this.state.curframe === this.state.thumbnails.length) {
      this.selectFrame(1);
    } else {
      this.selectFrame(Number(this.state.curframe) + 1);
    }
  }

  slide(e) {
    
    this.setState({
      scrollleft: -10 - ( (10 + frameWidth) * (e.target.value - 1) * (this.state.thumbnails.length - 5) ) / 99 
    });
    
  }

  selectScrollLeft(val) {
    this.setState({
      scrollleft: val
    });
  }
  
  render () {
    return (
        <div className='background'>
          <div className='block'>
            <div className='row'>
              <div className='col left'>

                <div>
                  {
                    <embed id='video' src="https://steamcdn-a.akamaihd.net/steam/apps/256720476/movie480.webm?t=1529548698" />
                  }
                </div>

                <div id='list'>
                  <div id='scroll' style={{left:this.state.scrollleft+'px'}}> 
                    {
                      this.state.thumbnails.map( (i) => {
                        var url = "https://s3-us-west-1.amazonaws.com/steamgallery/pubg"+i+".jpg";
                        return <Thumbnail num={i} selectLeft={this.selectScrollLeft} left={this.state.scrollleft} selectFrame={this.selectFrame} key={i} src={url} curFrame={this.state.curframe}/>
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