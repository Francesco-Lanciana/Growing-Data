import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from 'Nav';
import SelectionScreen from './selection_screen/SelectionScreen';
import AnalyticsScreen from './analytics_screen/AnalyticsScreen';

import NotificationList from './notifications/NotificationList';

require('base');

class Main extends React.Component {
  render() {

    return (
        <Router>
            <div>
                <Nav/>
                <NotificationList/>
                <Route exact path="/" component={SelectionScreen}/>
                <Route path="/analytics" component={AnalyticsScreen}/>
            </div>
        </Router>
    );
  }
}

export default Main;
