// import React from 'react';
// import ReactDOM from 'react-dom';

// const frameWidth = 122;

// class Thumbnail extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			borderColor : 'black'
// 		};
// 		this.select = this.select.bind(this);
// 	}
	
// 	componentWillReceiveProps(nextProps) {
// 		var len = this.props.src.length;
// 		if(nextProps.curFrame == this.props.src.replace(/.*?(\d+)[^\d]*$/,'$1') ){
// 			this.setState({
// 				borderColor: 'white'
// 			});
			
// 		} else {
// 			this.setState({
// 				borderColor: 'black'
// 			})
// 		}

// 	}

// 	select(e) {
// 		var len = e.target.src.length;
// 	    this.props.selectFrame.call(null, e.target.src[len-5]);
// 	}

	
// 	render() {
// 		return(
// 			<img onClick={this.select} className="thumbnails" src={this.props.src} style={{border:'1px solid '+ this.state.borderColor}}/>
// 		)
// 	}
// }
// module.exports = Thumbnail;