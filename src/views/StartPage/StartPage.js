import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

// Components
import Select from '../../components/Select/Select';
import SalonList from '../../components/SalonList';

class StartPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      priceFilter: '' // Set a default value for the price filter and select
    };
    this.handleOnFilterChange = this.handleOnFilterChange.bind(this);
  }

  handleOnFilterChange(event) {

    const { value } = event.target;

    this.setState(() => ({ priceFilter: value }));

  }

  render() {

    // Decounstruct the pricefilter into two variables
    const [min, max = Number.MAX_SAFE_INTEGER ] = this.state.priceFilter.split(',');

    // Filter our the salons from a range of values
    const filteredSalons = this.state.priceFilter ?
      this.props.salons.filter(sal => {
        return sal.price >= min && sal.price <= max
      }) : this.props.salons;

    return (
      <div className="view">
        <div className="card">
          <div className="card-block">
            <FontAwesome.FaChevronLeft />
            <h1>Hår</h1>
            <FontAwesome.FaList />
          </div>
        </div>
        <Select value={this.state.priceFilter} onChange={this.handleOnFilterChange} />
        <SalonList salons={filteredSalons} onViewSalon={this.props.onViewSalon} />
      </div>
    );
  }
}

StartPage.propTypes = {
  salons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stars: PropTypes.number,
      votes: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
  onViewSalon: PropTypes.func
};

export default StartPage;
