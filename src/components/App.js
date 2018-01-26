import React, { Component } from 'react';
// import logo from './logo.svg';
// import * as FontAwesome from 'react-icons/lib/fa'
import '../styles/App.css';
import salonger from '../utils/salonger';
import Lista from './Lista';
import EnSalong from './EnSalong';

class App extends Component {
  state = {
    salongId: "",
    salonger: salonger,
    showList: true
  };

  onClick = sal => {
    this.setState({ salongId: sal, showList: false });
  };

  goBack = ()=>{
    this.setState({ showList: true });
  }

  render() {
    const {salongId, salonger, showList} = this.state;
    const renderView = showList ?  <Lista salonger={salonger} onClick={this.onClick} /> :  <EnSalong salonger={salonger} id={salongId} onClick={this.goBack} />;
    return (
      <div className="App">
        {renderView}
      </div>
    );
  }
}

export default App;
