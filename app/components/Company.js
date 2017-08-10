import React from 'react';

require('ComponentStyles/company');

class Company extends React.Component {
  render() {
    return (
      <div className="company-cell">
        <div className="company-selection">
          <input type="checkbox" value="None" id="company-selection" name="company-name" />
          <label htmlFor="company-selection"></label>
        </div>
        <div className="company-name">
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default Company;
