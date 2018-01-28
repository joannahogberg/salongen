import React, { Component } from 'react';
// import * as FontAwesome from 'react-icons/lib/fa'
import '../styles/App.css';
// import salonger from '../utils/salonger';
// import Select from "./Select.js";
import Lista from './Lista';
// import EnSalong from './EnSalong';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Lista  />
      </div>
    );
  }
}

export default App;
