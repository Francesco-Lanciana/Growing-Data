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
  }
}
