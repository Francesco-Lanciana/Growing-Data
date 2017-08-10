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
    case 'UPDATE_SELECTION':
      return state.map((company) => {
        if (company.id === action.id) {
          return Object.assign(
            {},
            company,
            {selected: action.selected}
          );
        } else {
          return company;
        }
      });
    default:
      return state;
  };
};
