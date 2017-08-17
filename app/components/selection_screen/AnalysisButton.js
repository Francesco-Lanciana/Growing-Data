import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AnalyticsScreen from 'Components/analytics_screen/AnalyticsScreen';
import NotificationManager from 'Components/notifications/NotificationManager';

class AnalysisButton extends React.Component {
  constructor(props) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
  }

  renderButtonText(metricCount, companyCount) {
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

  renderError(metricCount, companyCount) {
    let selectionsMade = (metricCount > 0 && companyCount > 0);

    if (!selectionsMade) {
      let errorTitle = 'Invalid selection';
      let errorMessage;
      if (metricCount === 0 && companyCount === 0) {
        errorMessage = 'Please select company and metric';
      }
      else if (metricCount > 0 && companyCount === 0) {
        errorMessage = 'Please select one or more companies'
      }
      else if (metricCount === 0 && companyCount > 0) {
        errorMessage = 'Please select a message';
      }
      NotificationManager.error(errorTitle, errorMessage);
    }
  }

  renderButton(metricCount, companyCount) {
    let selectionsMade = (metricCount > 0 && companyCount > 0);

    if (selectionsMade) {
      return (
        <Link to="/analytics">
          <button className="button hollow" onClick={() => this.renderError(metricCount, companyCount)}>
            {this.renderButtonText(metricCount, companyCount)}
          </button>
        </Link>
      );
    } else {
      return (
        <button className="button hollow" onClick={() => this.renderError(metricCount, companyCount)}>
          {this.renderButtonText(metricCount, companyCount)}
        </button>
      );
    }
  }

  render() {
    const {selections} = this.props;
    // FIXME: metricCount varies between 0 and 2.
    let metricCount = Object.getOwnPropertyNames(selections.metric).length;
    let companyCount = selections.companies.length;

    return (
      <div>
        {this.renderButton(metricCount, companyCount)}
      </div>
    );
  }
}

export default connect((state) => state)(AnalysisButton);
