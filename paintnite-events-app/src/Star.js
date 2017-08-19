import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

class Rating extends Component{
    
  constructor(props) {
      super(props);
      this.state = {
        rating: this.props.rating || null,
        temp_rating: null
    };

    // this.sortEevent = this.sortEevent.bind(this);
  }

  rate(rating) {
    this.setState({
      rating: rating,
      temp_rating: rating
    });
  }

  star_over(rating) {
    this.state.temp_rating = this.state.rating;
    this.state.rating = rating;
    
    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  }

  star_out() {
    this.state.rating = this.state.temp_rating;
    
    this.setState({ rating: this.state.rating });
  }

  render() {
    var stars = [];
    
    for(var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';
      
      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label
            key={i}
          className={klass}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out.bind(this)}>
          ★
        </label>
      );
    }
    
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
};

Rating.propTypes={
    disabled: PropTypes.bool
}

export default Rating;