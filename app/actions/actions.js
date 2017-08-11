const uuidv4 = require('uuid/v4');

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export const addCompanies = (companies) => {
  let c = companies.map((company) => {
    return ({
      name: company.name,
      selected: false,
      id: company.id,
    });
  });

  return {
    type: 'ADD_COMPANIES',
    companies: c,
  };
};

export const toggleSelectedCompanies = (name, id, selected) => {
  return dispatch => {

    if (selected) {
      dispatch(addSelection('ADD_SELECTED_COMPANY', {
        name,
        id,
      }));
    } else {
      dispatch(removeSelection('REMOVE_SELECTED_COMPANY', id));
    }

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

export const addMetrics = (metrics) => {
  let m = metrics.map((metric) => {
    return ({
      name: metric.name,
      selected: false,
      id: metric.id,
    })
  });

  return {
    type: 'ADD_METRICS',
    metrics: m,
  };
};

export const toggleSelectedMetrics = (name, id, selected) => {
  return dispatch => {

    if (selected) {
      dispatch(addSelection('ADD_SELECTED_METRIC', {
        name,
        id,
      }));
    } else {
      dispatch(removeSelection('REMOVE_SELECTED_METRIC', id));
    }

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

export const addSelection = (type, selection) => {
  return {
    type,
    selection,
  }
}

export const removeSelection = (type, id) => {
  return {
    type,
    id,
  }
}
