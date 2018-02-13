import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

// Components
import Rating from '../../components/Rating/Rating';

// Helpers
import convertToSlug from '../../helpers/convertToSlug';

// Image
import headerImg from '../../media/images/headerImg.png';

// Styling
import './salong-page.css';

class SalonPage extends Component {

  shouldComponentUpdate(nextProps) {

    if ( nextProps.id !== this.props.id ) {
      return true;
    }

    return false;

  }

  render() {

    const salonUrl = convertToSlug( this.props.salon.name );

    return (
      <div className="view salong">
        <div className="card card-inverse">
          <img className="card-img" src={headerImg} alt="Card cap" style={{ width: "100%" }} />
          <div className="card-img-overlay">
            <div className="card-nav">
              <FontAwesome.FaChevronLeft onClick={this.props.onBack} />
              <FontAwesome.FaHeartO />
            </div>
            <div className="card-block">
              <h4 className="card-title">{this.props.salon.name}</h4>
              <div className="card-text">
                <Rating rating={this.props.salon.stars} />
                <span className="votes">({this.props.salon.votes})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-block-top">
          <a href="#0" className="card-link">Info</a>
          <a href="#0" className="card-link">Schema</a>
        </div>
        <ul className="list-group list-group-flush">
          <li><FontAwesome.FaMapMarker /> <span>Rådmansgatan 46, 113 57 Stockholm</span></li>
          <li><FontAwesome.FaClockO /> <span>Öppet till 19:00 idag</span> <FontAwesome.FaChevronDown /></li>
          <li><FontAwesome.FaPhone /> <span>08-522 389 20</span></li>
          <li><FontAwesome.FaGlobe /><span className="text-lowercase">{`www.${salonUrl}.se`}</span></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        </ul>
      </div>
    );
  }
}

SalonPage.defaultProps = {
  id: 1,
  salon: {},
  onBack: () => {}
};

SalonPage.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  salon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    stars: PropTypes.number,
    votes: PropTypes.number,
    price: PropTypes.number
  }),
  onBack: PropTypes.func
};

export default SalonPage;
