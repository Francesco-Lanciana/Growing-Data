import React from 'react';
import {connect} from 'react-redux';

import {getSelectedCompanies} from 'App/api/companyListingAPI';
import SelectedCompany from './SelectedCompany';

class SelectedCompanyList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSelectedCompanies() {
    const {companies} = this.props;
    let filteredCompanies = getSelectedCompanies(companies);

    if (filteredCompanies.length === 0) {
      return <p className="company-listing-message">Select companies of interest</p>
    }
    return filteredCompanies.map((company) => {
      return (
        <SelectedCompany name={company.name} key={company.id}/>
      );
    });
  }

  render() {
    return (
      <div className="selected-company-container">
        {this.renderSelectedCompanies()}
      </div>
    );
  }
}

export default connect((state) => state)(SelectedCompanyList);
