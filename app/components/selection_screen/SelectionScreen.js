import React from 'react';

import CompanyList from 'Components/company_list/CompanyList';
import MetricList from 'Components/metric_list/MetricList';
import SelectedCompaniesList from 'Components/selected_company_list/SelectedCompaniesList';

require('ComponentStyles/selection-screen');

class SelectionScreen extends React.Component {
  render() {
    return (
      <div id="main-screen-content">
        <div id="company-list">
          <CompanyList/>
        </div>
        <div id="metric-list">
          <MetricList/>
        </div>
        <div id="selected-companies-list">
          <SelectedCompaniesList/>
        </div>
      </div>
    );
  }
}

export default SelectionScreen;
