import React from 'react';
import ReactDOM from 'react-dom';

class Description extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      headerImageUrl: "https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1525818062",
      description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has truly taken on a life of its own.",
      recentReview: "Negative",
      allReview: "Mixed",
      releaseDate: "Dec 21, 2017",
      developer: "PUBG Corporation",
      publisher: "PUBG Corporation",
      tags:["survival", "shooter", "multiplayer", "PvP"]
    } 
  }

  render() {
  	var i = 0;
  	return (
  		<div className='col right'>
	  		<div id='game_header'>
	          <img className="header" src={this.state.headerImageUrl} />
	        </div>
	        <div id='description'>
	        	{this.state.description}
	        </div>
	        <br/>
	        <div id='reviews'>
	        	<p> RECENT REVIEWS: <span style={{'paddingLeft':'5px'}} className={this.state.recentReview}> 
			        	{this.state.recentReview}
		        	</span>
		        </p>
		        <p> ALL REVIEWS:    <span style={{'paddingLeft':'36px'}} className={this.state.allReview}> 
			        	{this.state.allReview}
		        	</span>
		        </p>

		        <br/>

		        <p> RELEASED DATE:  <span style={{'paddingLeft':'12px'}} className='grey'> 
			        	{this.state.releaseDate}
		        	</span>
		        </p>	

		        <br/>

		        <p> DEVELOPER:      <span style={{'paddingLeft':'38px'}} className='blue'> 
			        	{this.state.developer}
		        	</span>
		        </p>
		        <p> PUBLISHER:      <span style={{'paddingLeft':'45px'}} className='blue'> 
			        	{this.state.publisher}
		        	</span>
		        </p>	
		        
		        <br/>

		        <p> Popular user-defined tags for this product: </p>
		        {
		        	this.state.tags.map((tag) => {
		        		return <span key={i++}className="box blue">{tag}</span> ;
		        	})
		        }
        	</div>
        </div>
        );
  }
}
module.exports = Description;