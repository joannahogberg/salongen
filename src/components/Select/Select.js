import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

// Styling
import './Select.css';

class Select extends PureComponent {

  render() {
    return (
      <div className="form-group">
        <select className="form-control" onChange={this.props.onChange} value={this.props.value}>
          <option value={''}>Sort By Price</option>
          <option value={[1, 499]}>1 - 499</option>
          <option value={[500, 749]}>500 - 749</option>
          <option value={[750]}>751+</option>
        </select>
      </div>
    );
  }

}

Select.defaultProps = {
  onChage: () => {},
  value: ''
};

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Select;
