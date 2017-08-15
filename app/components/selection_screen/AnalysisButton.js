import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AnalyticsScreen from 'Components/analytics_screen/AnalyticsScreen';

class AnalysisButton extends React.Component {
  constructor(props) {
    super(props);
  }

  renderButtonText() {
    const {selections} = this.props;
    // FIXME: metricCount varies between 0 and 2.
    let metricCount = Object.getOwnPropertyNames(selections.metric).length;
    let companyCount = selections.companies.length;
    let buttonText = 'Analyze company';
    if (metricCount === 0 && companyCount === 0) {
      buttonText = 'Make selection';
    }
    else if (metricCount > 0 && companyCount === 0) {
      buttonText = 'Select companies';
    }
    else if (metricCount === 0 && companyCount > 0) {
      buttonText = 'Select metrics';
    }
    else if (metricCount > 0 && companyCount > 1) {
      buttonText = 'Analyze companies';
    }
    return buttonText;
  }

  render() {
    return (
      <div>
        <Link to="/analytics">
          <button className="button hollow">{this.renderButtonText()}</button>
        </Link>

      </div>
    );
  }
}

export default connect((state) => state)(AnalysisButton);
