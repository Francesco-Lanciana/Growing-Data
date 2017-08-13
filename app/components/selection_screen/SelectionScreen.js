import React from 'react';
import Media from 'react-media';
import {connect} from 'react-redux';

import CompanyList from 'Components/company_list/CompanyList';
import MetricList from 'Components/metric_list/MetricList';
import SelectedCompaniesList from 'Components/selected_company_list/SelectedCompaniesList';
import AnalysisButton from './AnalysisButton';
import MetricLineGraph from 'Components/metric_graph/MetricLineGraph';

require('ComponentStyles/selection-screen');

class SelectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.renderDashboardGraph = this.renderDashboardGraph.bind(this);
  }

  renderDashboardGraph() {
    const {selections} = this.props;
    // FIXME: metricCount varies between 0 and 2.
    let metricCount = Object.getOwnPropertyNames(selections.metric).length;
    let companyCount = selections.companies.length;
    let helpText = 'Analyze company';
    if (metricCount === 0 && companyCount === 0) {
      helpText = 'Make selection';
    }
    else if (metricCount > 0 && companyCount === 0) {
      helpText = 'Select companies';
    }
    else if (metricCount === 0 && companyCount > 0) {
      helpText = 'Select metrics';
    }
    else if (metricCount > 0 && companyCount >= 1) {
      return <MetricLineGraph size={[window.innerWidth * 0.4, window.innerHeight / 2]}/>;
    }
    return <p>{helpText}</p>;
  }

  render() {
    return (
      <div id="main-screen-content">
        <Media query="(max-width: 800px)" render={() => (
          <div id="analysis-button">
            <AnalysisButton/>
          </div>
        )}/>
        <div id="company-list">
          <CompanyList/>
        </div>
        <Media query="(max-width: 800px)" render={() => (
          <div id="selected-companies-list">
            <SelectedCompaniesList/>
          </div>
        )}/>
        <div className="right-content">
          <div id="metric-list">
            <MetricList/>
          </div>
          <div id="graph-container-dashboard">
            <Media query="(min-width: 800px)" render={() => this.renderDashboardGraph()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    selections: state.selections,
  }
})(SelectionScreen);
