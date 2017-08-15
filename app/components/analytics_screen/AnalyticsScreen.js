import React from 'react';

import MetricLineGraph from 'Components/metric_graph/MetricLineGraph';
import CompanyList from 'Components/company_list/CompanyList';

require('ComponentStyles/analysis-screen');

class AnalyticsScreen extends React.Component {
  constructor(props){
    super(props)
    this.onResize = this.onResize.bind(this);
  }

  onResize() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 120 })
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize, false);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <div id="main-screen-content-analysis">
        <div className="graph-container">
          <MetricLineGraph size={[this.state.screenWidth * 0.95, this.state.screenHeight / 2]}/>
        </div>
        <div id="company-list-analytics" className="company-list">
          <CompanyList/>
        </div>
      </div>
    );
  }

};

export default AnalyticsScreen;
