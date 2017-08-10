const uuidv4 = require('uuid/v4');

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export const addCompanies = (companyNames) => {
  let c = companyNames.map((company) => {
    return ({
      name: company,
      selected: false,
      id: uuidv4(),
    });
  });

  return {
    type: 'ADD_COMPANIES',
    companies: c,
  };
};

export const toggleSelected = (id, selected) => {
  return {
    type: 'UPDATE_SELECTION',
    id,
    selected,
  };
};

export const addMetrics = (metricNames) => {
  let m = metricNames.map((metric) => {
    return ({
      name: metric,
      selected: false,
      id: uuidv4(),
    })
  });

  return {
    type: 'ADD_METRICS',
    metrics: m,
  };
};

export const toggleSelectedMetrics = (id, selected) => {
  return {
    type: 'UPDATE_METRIC_SELECTION',
    id,
    selected,
  };
};
