// Initial states
var initialSelections = {
  metric: {},
  companies: [],
};

// Reducers
export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
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
    case 'UPDATE_COMPANY':
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

export const metricsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_METRICS':
      return [
        ...state,
        ...action.metrics
      ];
    case 'UPDATE_METRIC':
      return state.map((metric) => {
        if (metric.id === action.id) {
          return Object.assign(
            {},
            metric,
            {selected: action.selected}
          );
        } else {
          return metric;
        }
      });
    case 'DESELECT_ALL_METRICS':
      state.forEach((metric) => metric.selected = false);
    default:
      return state;
  };
};

export const selectionReducer = (state = initialSelections, action) => {
  switch (action.type) {
    case 'SELECT_METRIC':
      return {
        metric: action.selection,
        companies: state.companies,
      };
    case 'ADD_SELECTED_COMPANY':
      return {
        metric: state.metric,
        companies: [
          ...state.companies,
          action.selection,
        ],
      };
    case 'DESELECT_METRIC':
      return {
        metric: {},
        companies: state.companies,
      };
    case 'REMOVE_SELECTED_COMPANY':
      let filteredCompanies = state.companies.filter((company) => {
        return company.id != action.id;
      });
      return {
        metric: state.metric,
        companies: filteredCompanies,
      };
    default:
      return state;
  };
};


export const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [
        ...state,
        action.notification
      ];
    case 'REMOVE_NOTIFICATION':
      return [
        ...state.slice(1)
      ];
    case 'REMOVE_NOTIFICATION_BY_ID':
      let filteredNotifications = state.filter((notification) => {
        return notification.id != action.id;
      });

      return filteredNotifications;
    default:
      return state;
  }
}
