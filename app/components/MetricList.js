import React from 'react';

import Metric from 'Metric';
import jsonData from 'data';

class MetricList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCompanies() {
    let metrics = [];
    for (const metricID in jsonData.metrics) {
      if (jsonData.metrics.hasOwnProperty(metricID)) {
        metrics.push(
          <Metric name={jsonData.metrics[metricID].name} key = {metricID}/>
        )
      }
    }
    return metrics;
  }

  render() {
    return (
      <div>
        {this.renderCompanies()}
      </div>
    );
  }
}

export default MetricList;
