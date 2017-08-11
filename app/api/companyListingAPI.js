// Extract the names of the companies from a JSON data object
export const extractCompanies = (data) => {
  let companyNames = [];
  for (const companyID in data.companies) {
    if (data.companies.hasOwnProperty(companyID)) {
      companyNames.push({
        name: data.companies[companyID].name,
        id: companyID,
      });
    }
  }
  return companyNames;
};

// Extract the names of the metrics from a JSON data object
export const extractMetrics = (data) => {
  let metrics = [];
  for (const metricID in data.metrics) {
    if (data.metrics.hasOwnProperty(metricID)) {
      metrics.push(data.metrics[metricID].name);
    }
  }
  return metrics;
}

// Extract the filings for each company from a JSON data object
export const extractFilings = (data) => {
  let filings = [];
  for (const companyID in data.filings) {
    if (data.filings.hasOwnProperty(companyID)) {
      filings.push(data.filings[companyID]);
    }
  }
  return filings;
}

export const filterFilings = (filings, companies) => {
  //May be an issue if pass by reference...
  let filteredFilings = {};

  for (let i = 0; i < companies.length; i++) {
    let id = companies[i].id;
    filteredFilings[id] = filings[id];
  }

  return filteredFilings;
}

export const filterCompanies = (companies, searchText) => {
  //May be an issue if pass by reference...
  let filteredCompanies = companies;

  filteredCompanies = filteredCompanies.filter((company) => {
    const text = company.name.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) != -1;
  });

  return filteredCompanies;
}

export const getSelectedCompanies = (companies) => {
  let filteredCompanies = companies;

  return filteredCompanies.filter((company) => {
    return company.selected;
  })
}
