
import React from "react";


function Select(props) {
  return (
    <select className="form-control" onChange={props.onChange} value={props.value}>
      <option value=""> Sort By Price </option>
      <option value="500"> 250 - 500 </option>
      <option value="501"> 501 - 750 </option>
      <option value="751"> 751 - 900 </option>
    </select>   
  );
}
export default Select;