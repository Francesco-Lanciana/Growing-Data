import React from 'react';

import CompanySearch from './CompanySearch';

const SearchList = (props) => (
  <div>
    <div className = "search-box">
      <CompanySearch onSearch={props.onSearch}/>
    </div>
    <div className="list-container">
      {props.children}
    </div>
  </div>
)

export default SearchList;
