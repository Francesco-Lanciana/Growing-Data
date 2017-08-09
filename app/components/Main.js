import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from 'Nav';
import Dashboard from 'Dashboard';
import CompanySearch from 'CompanySearch';

require('base');

class Main extends React.Component {
  render() {
    return (
        <Router>
            <div>
                <Nav/>
                <CompanySearch/>
                <Route pattern="/" component={Dashboard}/>
            </div>
        </Router>
    );
  }
}

export default Main;
