// Initial states
var initialCounts = {
  metricCount: 0,
  companyCount: 0,
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

export const countReducer = (state = initialCounts, action) => {
  switch (action.type) {
    case 'UPDATE_METRIC_COUNT':
      let mCount = state.metricCount;

      return Object.assign(
        {},
        state,
        {metricCount: mCount + action.countUpdate}
      );
    case 'UPDATE_COMPANY_COUNT':
      let cCount = state.companyCount;

      return Object.assign(
        {},
        state,
        {companyCount: cCount + action.countUpdate}
      );
    default:
      return state;
  };
};
