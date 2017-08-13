import React from 'react';
import Media from 'react-media';

import CompanyList from 'Components/company_list/CompanyList';
import MetricList from 'Components/metric_list/MetricList';
import SelectedCompaniesList from 'Components/selected_company_list/SelectedCompaniesList';
import AnalysisButton from './AnalysisButton';

require('ComponentStyles/selection-screen');

const SelectionScreen = () => (
  <div id="main-screen-content">
    <Media query="(max-width: 800px)" render={() => (
      <div id="analysis-button">
        <AnalysisButton/>
      </div>
    )}/>
    <div id="company-list">
      <CompanyList/>
    </div>
    <div id="metric-list">
      <MetricList/>
    </div>
    <Media query="(max-width: 800px)" render={() => (
      <div id="selected-companies-list">
        <SelectedCompaniesList/>
      </div>
    )}/>
    <Media query="(min-width: 800px)" render={() => (
      <p id="metric-graph">The document is more than 768px wide.</p>
    )}/>
  </div>
)

export default SelectionScreen;
