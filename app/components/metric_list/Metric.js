import React from 'react';
import {connect} from 'react-redux';

import {toggleSelectedMetrics} from 'App/actions/actions';

require('ComponentStyles/metric');

class Metric extends React.Component {
  render() {
    const {name, selected, id, dispatch} = this.props;
    let metricClassName = selected ? 'metric metric-selected' : 'metric';

    return (
      <div className={metricClassName} onClick={() => {
        dispatch(toggleSelectedMetrics(name, id, !selected));
      }}>
        {name}
      </div>
    );
  }
}

export default connect()(Metric);
