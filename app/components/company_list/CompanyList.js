import React from 'react';
import {connect} from 'react-redux';
import Company from './Company';

import {filterCompanies} from 'App/api/companyListingAPI';

require('ComponentStyles/company');

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <div className="company-container">
        {this.renderCompanies()}
      </div>
    );
  }
}

export default connect((state) => state)(CompanyList);
