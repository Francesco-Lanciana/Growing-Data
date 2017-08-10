import * as redux from 'redux';

import {searchTextReducer, showSelectedReducer} from 'App/reducers/reducers';

export var configure = (initialState ={}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showSelectedReducer,
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
