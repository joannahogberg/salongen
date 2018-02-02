import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

// Styling
import './rating.css';

class Rating extends PureComponent {

  render() {

    // Create a new array and fill it then check if the index is less then the props.rating to define
    // what svg we shall render
    const stars = new Array(5).fill().map((_, index) => {

      const star = index < this.props.rating ? <FontAwesome.FaStar /> : <FontAwesome.FaStarO />;

      return (
        <div key={index} className="rating-star">{star}</div>
      );

    });

    return (
      <div className="rating">{stars}</div>
    );
  }

}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
