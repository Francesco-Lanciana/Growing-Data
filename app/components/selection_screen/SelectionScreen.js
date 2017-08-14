import React from 'react';
import Media from 'react-media';
import {connect} from 'react-redux';

import CompanyList from 'Components/company_list/CompanyList';
import MetricList from 'Components/metric_list/MetricList';
import SelectedCompaniesList from 'Components/selected_company_list/SelectedCompaniesList';
import MetricLineGraph from 'Components/metric_graph/MetricLineGraph';

require('ComponentStyles/selection-screen');

class SelectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.renderDashboardGraph = this.renderDashboardGraph.bind(this);
    this.onResize = this.onResize.bind(this);
    this.state = ({
      graphWidth: document.documentElement.innerWidth * 0.6,
      graphHeight: document.documentElement.innerHeight * 0.7
    });
  }

  onResize() {
    if (document.getElementById("graph-container-dashboard") != null) {
      this.setState({
        graphWidth: document.getElementById("graph-container-dashboard").parentNode.clientWidth,
        graphHeight: document.getElementById("graph-container-dashboard").clientHeight
      });
    } else {
      console.log("DD");

      this.setState({
        graphWidth: window.innerWidth * 0.65,
        graphHeight: window.innerHeight * 0.5
      });
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize, false);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  renderDashboardGraph() {
    const {selections} = this.props;
    // FIXME: metricCount varies between 0 and 2.
    let metricCount = Object.getOwnPropertyNames(selections.metric).length;
    let companyCount = selections.companies.length;
    let helpText = 'Analyze company';
    if (metricCount === 0 && companyCount === 0) {
      helpText = 'Select company/ies and metric';
    }
    else if (metricCount > 0 && companyCount === 0) {
      helpText = 'Select company/s';
    }
    else if (metricCount === 0 && companyCount > 0) {
      helpText = 'Select metric';
    }
    else if (metricCount > 0 && companyCount >= 1) {
      let x,y;
      if (document.getElementById("graph-container-dashboard") != null) {
        document.getElementById("graph-container-dashboard").removeAttribute("width");
        x = document.getElementById("graph-container-dashboard").parentNode.clientWidth,
        y = document.getElementById("graph-container-dashboard").clientHeight
      } else {
        // Content was reloaded
        x = this.state.graphWidth;
        y = this.state.graphHeight;
      }
      console.log(x);
      console.log(y);
      // Get width of right content and height of graph-container-dashboard
      return <MetricLineGraph size={[x* 0.8, y * 0.9]}/>;
    }
    return (<div>
      {helpText}
    </div>);
  }

  render() {
    return (
      <div id="main-screen-content">
        <div className="company-list">
          <CompanyList/>
        </div>
        <Media query="(max-width: 800px)" render={() => (
          <div className="selected-companies-list">
            <SelectedCompaniesList/>
          </div>
        )}/>
        <div className="right-content">
          <div className="metric-list">
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
