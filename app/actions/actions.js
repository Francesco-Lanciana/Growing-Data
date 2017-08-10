export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export const addCompanies = (companies) => {
  return {
    type: 'ADD_COMPANIES',
    companies
  };
};
