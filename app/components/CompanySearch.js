import React from 'react';
var {connect} = require('react-redux');
var actions = require('App/actions/actions');

require('ComponentStyles/company-search');

class CompanySearch extends React.Component {
  render() {

    const {dispatch, searchText} = this.props;

    return (
      <div className="container__header">
        <input type="search" ref="searchText" placeholder="Search for a company" onChange={() => {
          const searchText = this.refs.searchText.value;
          dispatch(actions.setSearchText(searchText));
        }}/>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    searchText: state.searchText,
  }
})(CompanySearch);