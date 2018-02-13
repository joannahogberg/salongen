import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Views
import StartPage from '../views/StartPage/StartPage';
import SalonPage from '../views/SalonPage/SalonPage';

// Data source
import dataSalons  from '../data/salonger';

// Styling
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSingleView: false,
      selectedSalon: null
    };
    this.toggleViewstate = this.toggleViewstate.bind(this);
  }

  toggleViewstate(salonId) {

    // We need to check if the salonId is an number since the onBack returns a mouse event
    // if it is we know that the user is trying view a salon, so we update the state accordingly
    if ( typeof salonId === 'number' ) {

      this.setState(() => ({
        isSingleView: true,
        selectedSalon: salonId
      }));

    } else {

      // If not we reset the state
      this.setState(() => ({
        isSingleView: false,
        selectedSalon: null
      }));

    }

  }

  render() {

    switch (this.state.isSingleView) {
      case true: {
        const selectedSalon = this.props.salons.filter(salon => salon.id === this.state.selectedSalon);
        return <SalonPage id={this.state.selectedSalon} salon={selectedSalon[0]} onBack={this.toggleViewstate} />
      }
      default: {
        const sortedSalons = this.props.salons.sort((a, b) => a.name.localeCompare(b.name));
        return <StartPage salons={sortedSalons} onViewSalon={this.toggleViewstate} />
      }

    }

  }
}

App.defaultProps = {
  salons: dataSalons
};

App.propTypes = {
  salons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stars: PropTypes.number,
      votes: PropTypes.number,
      price: PropTypes.number,
    })
  )
}

export default App;
