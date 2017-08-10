import React from 'react';
import * as d3 from 'd3';

import Company from 'Company';
import jsonData from 'data';

require('ComponentStyles/company');

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCompanies() {
    let companyNames = [];
    for (const companyID in jsonData.companies) {
      if (jsonData.companies.hasOwnProperty(companyID)) {
        companyNames.push(
          <Company name={jsonData.companies[companyID].name} key = {companyID}/>
        )
      }
    }
    return companyNames;
  }

  render() {
    return (
      <div className="company-container">
        {this.renderCompanies()}
      </div>
    );
  }
}

export default CompanyList;
