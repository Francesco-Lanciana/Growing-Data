import * as redux from 'redux';
import thunk from 'redux-thunk';

import * as reducers from 'App/reducers/reducers';

export var configure = (initialState ={}) => {
  const reducer = redux.combineReducers({
    searchText: reducers.searchTextReducer,
    metrics: reducers.metricsReducer,
    companies: reducers.companiesReducer,
    selections: reducers.selectionReducer,
    notifications: reducers.notificationsReducer,
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
