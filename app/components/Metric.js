import React from 'react';


class Metric extends React.Component {
  render() {
    return (
      <div className="metric-name">
        {this.props.name}
      </div>
    );
  }
}

export default Metric;
