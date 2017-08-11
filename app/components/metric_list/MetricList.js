import React from 'react';
import {connect} from 'react-redux';
import Metric from './Metric';
import jsonData from 'data';

class MetricList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCompanies() {
    const {metrics} = this.props;
    let metricElements = [];
    for (let i = 0; i < metrics.length; i++) {
        metricElements.push(
          <Metric key={metrics[i].id} {...metrics[i]}/>
        )
    }
    return metricElements;
  }

  render() {
    return (
      <div>
        {this.renderCompanies()}
      </div>
    );
  }
}

export default connect((state) => state)(MetricList);
