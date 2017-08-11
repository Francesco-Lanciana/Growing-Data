import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from 'Nav';
import SelectionScreen from './selection_screen/SelectionScreen';
import CompanySearch from './company_list/CompanySearch';
import AnalysisButton from './selection_screen/AnalysisButton';


require('base');

class Main extends React.Component {
  render() {
    return (
        <Router>
            <div>
                <Nav/>
                <CompanySearch/>
                <AnalysisButton/>
                <Route pattern="/" component={SelectionScreen}/>
            </div>
        </Router>
    );
  }
}

export default Main;
