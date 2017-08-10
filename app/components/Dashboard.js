import React from 'react';

import CompanyList from 'CompanyList';
import MetricList from 'MetricList';
import SelectedCompaniesList from 'SelectedCompaniesList';

require('ComponentStyles/dashboard');

class Dashboard extends React.Component {
  render() {
    return (
      <div id="main-dashboard-content">
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

export default Dashboard;
