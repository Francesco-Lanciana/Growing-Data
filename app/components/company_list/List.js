import React from 'react';
import CompanySearch from './CompanySearch';

require('ComponentStyles/company');

const List = (props) => (
  <div className="list-container">
    <div className = "search-box">
      <CompanySearch/>
    </div>
    <div>
      {props.children}
    </div>
  </div>
)

export default (List);
