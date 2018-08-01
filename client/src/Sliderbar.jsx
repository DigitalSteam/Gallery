import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

const frameWidth = 122;

class SliderBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			thumbnails: [],
			scrollleft: -10,
			curframe: 1
		}
		this.selectFrame = this.selectFrame.bind(this);
	  this.prevFrame = this.prevFrame.bind(this);
	  this.nextFrame = this.nextFrame.bind(this);
	  this.selectScrollLeft = this.selectScrollLeft.bind(this);
	  this.slide = this.slide.bind(this);
	}

	componentDidMount() {
		if(this.props.thumbnails !== undefined && this.props.curframe !== undefined) {
			this.setState({
				thumbnails: this.props.thumbnails,
				curframe: this.props.curframe
			});
		}
		
	}

	selectFrame(val) {
    var curLeft = this.state.scrollleft - 10 + (val - 1) * (frameWidth + 10);
    if( curLeft < 0 || curLeft > 4*(frameWidth + 10)){
      this.setState({
        scrollleft: -10 - (val - 1) * (frameWidth + 10)
      });
    }
    this.props.selectFrame(Number(val));
 }

	selectScrollLeft(val) {
    this.setState({
      scrollleft: val
    });
	}

	prevFrame() {
		if(this.props.curframe === 1) {
			this.selectFrame(this.state.thumbnails.length);
	  } else {
			this.selectFrame(Number(this.props.curframe) - 1);
	  }
	}

	nextFrame() {
		if(this.props.curframe === this.state.thumbnails.length) {
			this.selectFrame(1);
		} else {
			this.selectFrame(Number(this.props.curframe) + 1);
		}
  }

	slide(e) {
		this.setState({
			scrollleft: -10 - ( (10 + frameWidth) * (e.target.value - 1) * (this.state.thumbnails.length - 5) ) / 99 
		});
	}
	
	render() {
		return(
			<div>
				<div id='list'>
	        <div id='scroll' style={{left:this.state.scrollleft+'px'}}> 
	          {
	            this.state.thumbnails.map( (i) => {
	              var url = "https://s3-us-west-1.amazonaws.com/steamgallery/pubg"+i+".jpg";
	              return <Thumbnail num={i} selectLeft={this.selectScrollLeft} left={this.state.scrollleft} selectFrame={this.selectFrame} key={i} src={url} curFrame={this.props.curframe}/>
	            })
	          }
	        </div>
	      </div>
				<span className="toggleleft" onClick={this.prevFrame}> &lt;  </span>
				<input type="range" min="1" max="100" className="slider" onChange={this.slide}/>
				<span className="toggleright" onClick={this.nextFrame}> &gt; </span>
			</div>
		)
	}
}
module.exports = SliderBar;