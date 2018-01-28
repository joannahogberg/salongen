import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import salonger from '../utils/salonger';
import Select from "./Select.js";
import SortedList from './SortedList';
import EnSalong from './EnSalong';

class Lista extends Component {
  state = {
    salongId: "",
    salonger: salonger,
    salongerByFilter: [],
    showList: true,
    showSelect: false,
    filter: false,
    priceRange: "All"
  };

  onClick = sal => {
    this.setState({ showSelect: true });
  };

  showSingle =(sal)=>{
    this.setState({ salongId: sal, showList: false });

  }

  goBack = ()=>{
    this.setState({ showList: true, filter: false, priceRange: "All" });
  }

  filterByPrice=(val)=>{

const salonger = this.state.salonger.map(sal => sal);
let priceRange;
const filterSalongs = salonger.filter((sal) =>{
  if(Number(val.target.value) === 500 ){
    priceRange = "220-500 kr"
    return sal.price <= 500;
  }
  else if(Number(val.target.value) === 501){
    priceRange = "501-750 kr"
    return sal.price >= 501 && sal.price <= 750
  }
  else{
    priceRange = "751-1000 kr"
    return sal.price >= 751
  }
}

);

 
    this.setState({ salongerByFilter: filterSalongs, showSelect: false, priceRange, filter: true });

  }

  render() {
    const {salongId, salonger,salongerByFilter, showList, filter, showSelect, priceRange} = this.state;
   let salongerToShow =  filter? salongerByFilter : salonger;
    const renderView = showList ?  <SortedList salonger={salongerToShow} onClick={this.showSingle} /> :  <EnSalong salonger={salongerToShow} id={salongId} onClick={this.goBack} />;
    
    const renderSelect = !showSelect ?  <div className="price-div">
    <span>{priceRange}</span>
    <FontAwesome.FaChevronDown onClick={this.onClick}/>
  </div> : 
       <Select onChange={this.filterByPrice} value={filter}/>
       ;
    
    return (
      <div className="card">
       {showList &&
        <div className="card-block">
        <FontAwesome.FaChevronLeft />
        <h1>Hår</h1>
        <FontAwesome.FaList />
      </div>
      }
    {showList &&
    <div className="card-block">
       {renderSelect}
       </div>
      }   
        {renderView}
      </div>
    );
  }
}

export default Lista;

