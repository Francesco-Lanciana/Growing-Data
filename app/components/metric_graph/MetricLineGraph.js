import React from 'react';
import {connect} from 'react-redux';

import MultiLineGraph from './MultiLineGraph';
import * as listingAPI from 'App/api/companyListingAPI';
import jsonData from 'data';

/*
BUG: list on screen creates double lines
*/

class MetricLineGraph extends React.Component {
  render() {
    const {selectedCompanies, selectedMetric, size} = this.props;

    // Extract companies being plotted and the metric of focus
    let companyNames = selectedCompanies.map((company) => company.name);
    let dataLabels = {names: companyNames, dataType: selectedMetric};

    /* Extract filings corresponding to companies of interest and convert the
       data type to an array or array of arrays composed of data objects.
    */
    let filteredFilings = listingAPI.filterFilings(jsonData.filings, selectedCompanies);
    let convertedFiling = listingAPI.convertFilingData(filteredFilings);

    return (
      <MultiLineGraph data={convertedFiling} dataLabels={dataLabels} size={size}/>
    );
  }
}

export default connect((state) => {
  return {
    selectedCompanies: state.selections.companies,
    selectedMetric: state.selections.metric,
  };
})(MetricLineGraph);
