import React from 'react';

require('ComponentStyles/company');

const Company = (props) => (
  <div className="company-cell" onClick={() => onSelect(this)}>

    <div className="company-selection">
      <input type="checkbox" checked={selected} id="company-selection" name="company-name" onChange={() => ''}/>
      <label htmlFor="company-selection"></label>
    </div>

    <div className="company-name">
      {name}
    </div>

  </div>
)

export default Company;
