import React from 'react';
import {connect} from 'react-redux';

import Company from './Company';
import SearchList from './SearchList';
import {filterCompanies} from 'App/api/companyListingAPI';
import {toggleSelectedCompanies, setSearchText} from 'App/actions/actions';

require('ComponentStyles/company-list');

class CompanyList extends React.Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.renderCompanies = this.renderCompanies.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // Filter company list using search text and render the applicable companies
  renderCompanies() {
    const {companies, searchText} = this.props;
    let filteredCompanies = filterCompanies(companies, searchText.toLowerCase());

    if (filteredCompanies.length === 0) {
      return <p className="company-listing-message">There are no matches</p>
    }

    return filteredCompanies.map((company) => {
      return (
        <Company key={company.id} onSelect={this.handleSelect} {...company}/>
      );
    });
  }

  // Handles state changes upon company selection
  handleSelect(company) {
    const {dispatch} = this.props;
    const {name, id, selected} = company.props;
    dispatch(toggleSelectedCompanies(name, id, !selected));
  }

  handleSearch(searchText) {
    const {dispatch} = this.props;
    dispatch(setSearchText(searchText));
  }

  render() {
    return (
      <SearchList onSearch={this.handleSearch}>
        {this.renderCompanies()}
      </SearchList>
    );
  }
}

export default connect((state) => state)(CompanyList);
