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

// TODO: This is so damn confusing, companies shouldn't know if they are selected
export const toggleSelectedMetrics = (name, id, selected) => {
  return dispatch => {

    // Metric reducer
    dispatch(deselectAllMetrics());
    dispatch(updateSelectedMetrics(id, selected));

    // Selection reducer
    if (selected) {
      dispatch(addSelection('SELECT_METRIC', {
        name,
        id,
      }));
    } else {
      dispatch(deselectMetric());
    }

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
  };
};

export const deselectMetric = () => {
  return {
    type: 'DESELECT_METRIC'
  };
};

export const deselectAllMetrics = () => {
  return {
    type: 'DESELECT_ALL_METRICS'
  };
};

export const removeSelection = (type, id) => {
  return {
    type,
    id,
  };
};

// Adds a notification to the notification queue
export const addNotification = (notification) => {
  return {
    type: 'ADD_NOTIFICATION',
    notification
  };
};

// Removes the first notification in the notification view
export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  };
};

// Removes the first notification in the notification view
export const removeNotificationById = (id) => {
  return {
    type: 'REMOVE_NOTIFICATION_BY_ID',
    id
  };
};
