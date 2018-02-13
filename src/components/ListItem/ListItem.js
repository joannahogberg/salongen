import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

// Components
import Rating from '../Rating/Rating';

// Styling
import './list-item.css';

class ListItem extends PureComponent {

  // Override the default event and send only the props.id upwards
  handleOnClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div className="list-item">
        <div className="list-item__times">
          <h3>12:00</h3>
        </div>
        <div className="list-item__info">
          <h3>{this.props.name}</h3>
          <div className="list-item__ratings">
            <Rating rating={this.props.stars} />
            <span className="votes">({this.props.votes})</span>
          </div>
          <span className="list-item__address">Rådmansgatan 46</span>
        </div>
        <div className="list-item__meta">
          <h3>{this.props.price} kr</h3>
          <p>30 min</p>
        </div>
        <div className="list-item__link">
          <FontAwesome.FaChevronRight onClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

ListItem.defaultsProps = {
  id: 0,
  name: 'Undefined',
  stars: 0,
  votes: 0,
  price: 0,
  onClick: () => {}
};

ListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  stars: PropTypes.number,
  votes: PropTypes.number,
  price: PropTypes.number,
  onClick: PropTypes.func
};

export default ListItem;
