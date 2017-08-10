import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from './components/Main';

const store = require('./store/store').configure();


function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
          <Main/>
        </Provider>,
        document.getElementById('root')
    );
}

renderApp(); // Renders App on init
