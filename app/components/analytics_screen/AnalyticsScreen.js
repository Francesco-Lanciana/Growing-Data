import React from 'react';
import {connect} from 'react-redux';
import LineGraph from './LineGraph';

import * as listingAPI from 'App/api/companyListingAPI';
import jsonData from 'data';

class AnalyticsScreen extends React.Component {
  render() {
    const {selectedCompanies, selectedMetrics} = this.props;
    let filteredFilings = listingAPI.filterFilings(jsonData.filings, selectedCompanies);
    let convertedFiling = listingAPI.convertFilingData(filteredFilings);
    return (
      <div>
        <LineGraph filings={convertedFiling} metrics={selectedMetrics}/>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    selectedCompanies: state.selections.companies,
    selectedMetrics: state.selections.metrics,
  };
})(AnalyticsScreen);
