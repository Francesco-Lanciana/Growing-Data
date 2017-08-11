import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AnalyticsScreen from 'Components/analytics_screen/AnalyticsScreen';

class AnalysisButton extends React.Component {
  constructor(props) {
    super(props);
  }

  renderButtonText() {
    const {counts} = this.props;
    let buttonText = 'Analyze company';
    if (counts.metricCount === 0 && counts.companyCount === 0) {
      buttonText = 'Make selection';
    }
    else if (counts.metricCount > 0 && counts.companyCount === 0) {
      buttonText = 'Select companies';
    }
    else if (counts.metricCount === 0 && counts.companyCount > 0) {
      buttonText = 'Select metrics';
    }
    else if (counts.metricCount > 0 && counts.companyCount > 1) {
      buttonText = 'Analyze companies';
    }
    return buttonText;
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/analytics">
            <button className="button hollow">{this.renderButtonText()}</button>
          </Link>

          <Route path="/analytics" component={AnalyticsScreen}/>
        </div>

      </Router>
    );
  }
}

export default connect((state) => state)(AnalysisButton);
