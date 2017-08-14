import React from 'react';

require('ComponentStyles/company-search');

class CompanySearch extends React.Component {

  /* Delete search if screen is switched in order to display full list upon next
     next screen load */
  componentWillUnmount() {
    this.props.handleSearch("");
  }

  render() {
    return (
      <div className="search-container">
        <input type="search" ref="searchText" placeholder="Search for a company..." onChange={() => {
          this.props.handleSearch(this.refs.searchText.value);
        }}/>
      </div>
    );
  }
}

export default CompanySearch;
