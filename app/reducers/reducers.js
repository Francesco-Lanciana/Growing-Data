// Initial states
var initialSelections = {
  metrics: [],
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
    default:
      return state;
  };
};

export const selectionReducer = (state = initialSelections, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_METRIC':
      return {
        metrics: [
          ...state.metrics,
          action.selection,
        ],
        companies: state.companies,
      };
    case 'ADD_SELECTED_COMPANY':
      return {
        metrics: state.metrics,
        companies: [
          ...state.companies,
          action.selection,
        ],
      };
    case 'REMOVE_SELECTED_METRIC':
      let filteredMetrics = state.metrics.filter((metric) => {
        return metric.id != action.id;
      });
      return {
        metrics: filteredMetrics,
        companies: state.companies,
      };
    case 'REMOVE_SELECTED_COMPANY':
      let filteredCompanies = state.companies.filter((company) => {
        return company.id != action.id;
      });
      return {
        metrics: state.metrics,
        companies: filteredCompanies,
      };
    default:
      return state;
  };
};
