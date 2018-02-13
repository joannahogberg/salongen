import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ListItem from './ListItem/ListItem';

class SalonList extends Component {

  render() {
    return (
      <div className="salon-list">
        {this.props.salons.map(salon =>
          <ListItem
            key={salon.id}
            id={salon.id}
            name={salon.name}
            stars={salon.stars}
            votes={salon.votes}
            price={salon.price}
            onClick={this.props.onViewSalon}
          />
        )}
      </div>
    );
  }
}

SalonList.propTypes = {
  salons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stars: PropTypes.number,
      votes: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
  onViewSalon: PropTypes.func.isRequired
};

export default SalonList;
