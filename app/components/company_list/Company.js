import React from 'react';

require('ComponentStyles/company');

class Company extends React.Component {
  render() {
    const {name, selected, onSelect} = this.props;

    return (
      <div className="company-cell" onClick={() => onSelect(this)}>

        <div className="company-selection">
          <input type="checkbox" checked={selected} id="company-selection" name="company-name" onChange={() => ''}/>
          <label htmlFor="company-selection"></label>
        </div>

        <div className="company-name">
          {name}
        </div>

      </div>
    );
  }
}

export default Company;
