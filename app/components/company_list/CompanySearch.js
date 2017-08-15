import React from 'react';

class CompanySearch extends React.Component {
  constructor(props) {
    super(props);
  }

  /* Delete search if screen is switched in order to display full list upon next
     next screen load */
  componentWillUnmount() {
    this.props.onSearch("");
  }

  render() {
    return (
      <div className="search-container">
        <input type="search" ref="searchText" placeholder="Search for a company..." onChange={() => {
          this.props.onSearch(this.refs.searchText.value);
        }}/>
      </div>
    );
  }
}

export default CompanySearch;
