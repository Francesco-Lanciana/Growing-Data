import React from 'react';

require('ComponentStyles/company-search');

class CompanySearch extends React.Component {
  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search for a company" onChange={() => {
            var searchText = this.refs.searchText.value;
            //dispatch(actions.setSearchText(searchText));
            console.log(searchText);
          }}/>
        </div>
      </div>
    );
  }
}

export default CompanySearch;
