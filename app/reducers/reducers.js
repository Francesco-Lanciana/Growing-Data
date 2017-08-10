export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export const showSelectedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export const companiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMPANIES':
      return [
        ...state,
        ...action.companies
      ];
    default:
      return state;
  };
};
