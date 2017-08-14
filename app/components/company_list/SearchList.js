import React from 'react';

import CompanySearch from './CompanySearch';

require('ComponentStyles/company');

const SearchList = (props) => (
  <div>
    <div className = "search-box">
      <CompanySearch onSearch={props.handleSearch}/>
    </div>
    <div className="list-container">
      {props.children}
    </div>
  </div>
)

export default SearchList;
