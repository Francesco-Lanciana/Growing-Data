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

export const toggleSelectedCompanies = (id, selected) => {
  return dispatch => {
    dispatch(updateNumberOfSelections('UPDATE_COMPANY_COUNT', selected));
    dispatch(updateSelectedCompanies(id, selected));
  };
};

export const updateSelectedCompanies = (id, selected) => {
  return {
    type: 'UPDATE_COMPANY',
    id,
    selected,
  };
}

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
  return dispatch => {

    dispatch(updateNumberOfSelections('UPDATE_METRIC_COUNT', selected));

    dispatch(updateSelectedMetrics(id, selected));
  };
};

export const updateSelectedMetrics = (id, selected) => {
  return {
    type: 'UPDATE_METRIC',
    id,
    selected,
  };
}

export const updateNumberOfSelections = (type, isSelected) => {
  const countUpdate = isSelected ? 1 : -1;
  return {
    type,
    countUpdate,
  }
}
