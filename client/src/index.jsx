import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
import Thumbnail from './Thumbnail.jsx';
import SliderBar from './Sliderbar.jsx';

const frameWidth = 122;
const videoUrl = {
  1: 'https://steamcdn-a.akamaihd.net/steam/apps/256720476/movie480.webm?t=1529548698',
  2: 'https://steamcdn-a.akamaihd.net/steam/apps/256704279/movie480.webm?t=1513851148',
  3: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_3.jpg',
  4: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_4.jpg',
  5: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_5.jpg',
  6: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_6.jpg',
  7: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_7.jpg',
  8: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_8.jpg',
  9: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_9.jpg',
  10: 'https://s3-us-west-1.amazonaws.com/steamgallery/pubg_big_10.jpg',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      thumbnails: [1,2,3,4,5,6,7,8,9,10],
      videos: [1,2],
      images: [3,4,5,6,7,8,9,10],
      curframe: 1
    };
    this.selectFrame = this.selectFrame.bind(this);
    this.ConditionalRender = this.ConditionalRender.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
  }

  nextFrame() {
    if(this.state.curframe === this.state.thumbnails.length) {
      this.selectFrame(1);
    } else {
      this.selectFrame(Number(this.state.curframe) + 1);
    }
  }

  selectFrame(val) {
    this.setState({
        curframe: Number(val)
    });
  }

  
  ConditionalRender() {
    var RenderVideo = (props) => {
      return <embed type='video/webm' id='video' src={videoUrl[props.curFrame]} /> ;
    };

    var RenderImage = (props) => {
      return <img id='image' src={videoUrl[props.curFrame]} />;
    }
    if(this.state.videos.includes(Number(this.state.curframe ))) {
      return <RenderVideo curFrame={this.state.curframe} />;
    } else {
      return <RenderImage curFrame={this.state.curframe} />;
    }
  }

  render () {

    return (
      <div className='background'>
        <div className='block'>
          <div className='row'>
            <div className='col left'>
              <div>
                {
                  <this.ConditionalRender />
                }
              </div>
              <SliderBar selectFrame={this.selectFrame} curframe={this.state.curframe} thumbnails={this.state.thumbnails}/>
            </div>
            <Description  />
          </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));