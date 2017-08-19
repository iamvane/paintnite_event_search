import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

const Star =(props)=>{

    var r = 'fa fa-star';
	if(!props.selected){
      r += '-o';
    }
    return (
    	<i {...this.props} className={r}/>
    );

};

class Rating extends Component{
     
     constructor(props) {
    
        super(props);
        this.state = {
          rating: 5,
            hoverAt: null
        };
      }

    handleMouseOver(idx, evt){
    	this.state.hoverAt = idx + 1;
        this.forceUpdate();
    }
    handleMouseOut(idx, evt){
    	this.state.hoverAt = null;
        this.forceUpdate();
    }
    handleClick(idx, evt){
        this.state.rating = idx + 1;
        this.forceUpdate();
        console.log('clicked');
    }
	render(){
    	let stars = [];
        for(var i = 0 ; i < 5; i++){
        	let rating = this.state.hoverAt != null ? this.state.hoverAt : this.state.rating;
        	let selected = (i < rating);
        	stars.push(
            <Star key={i} selected={selected}
            	  onMouseOver={this.handleMouseOver.bind(this, i)}
              	  onMouseOut={this.handleMouseOut.bind(this, i)}
                  onClick={this.handleClick.bind(this, i)}
            />);
        }
    	return (<div>{stars}</div>);
    }
};

export default Rating;