import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from './components/Main';

import {addCompanies, addMetrics} from 'App/actions/actions';
export const store = require('App/store/store').configure();
import * as listingAPI from 'App/api/companyListingAPI';
import jsonData from 'data';

store.dispatch(addCompanies(listingAPI.extractCompanies(jsonData)));
store.dispatch(addMetrics(listingAPI.extractMetrics(jsonData)));

function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
          <Main/>
        </Provider>,
        document.getElementById('root')
    );
}

renderApp(); // Renders App on init
