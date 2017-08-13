import React from 'react';
import {connect} from 'react-redux';

import Company from './Company';
import List from './List';
import {filterCompanies} from 'App/api/companyListingAPI';


class CompanyList extends React.Component {
  renderCompanies() {
    const {companies, searchText} = this.props;
    let filteredCompanies = filterCompanies(companies, searchText);

    if (filteredCompanies.length === 0) {
      return <p className="company-listing-message">There are no matches</p>
    }
    return filteredCompanies.map((company) => {
      return (
        <Company key={company.id} {...company}/>
      );
    });
  }

  render() {
    return (
      <List>
        {this.renderCompanies()}
      </List>
    );
  }
}

export default connect((state) => state)(CompanyList);
