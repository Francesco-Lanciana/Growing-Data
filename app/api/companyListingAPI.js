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
      metrics.push({
        name: data.metrics[metricID].name,
        id: metricID
      });
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

// Get the filings corresponding to the companies of interest
export const filterFilings = (filings, companies) => {
  let filteredFilings = {};

  for (let i = 0; i < companies.length; i++) {
    let id = companies[i].id;
    filteredFilings[companies[i].name] = filings[id];
  }

  return filteredFilings;
}

// Get the companies corresponding to the current search text
export const filterCompanies = (companies, searchText) => {
  let filteredCompanies = companies;

  filteredCompanies = filteredCompanies.filter((company) => {
    const text = company.name.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) != -1;
  });

  return filteredCompanies;
}

// Return only the companies that have been selected by the user
export const getSelectedCompanies = (companies) => {
  let filteredCompanies = companies;

  return filteredCompanies.filter((company) => {
    return company.selected;
  })
}

// Convert filings to array of filings => [[{year 1 data},{},{}],[{},{},{}]]
export const convertFilingData = (filingData) => {
  let companyFilingData = [];

  for (let id in filingData) {
    if (filingData.hasOwnProperty(id)) {
      let filing = filingData[id];

      let fileArray = [];

      for (let year in filing) {
        if (filing.hasOwnProperty(year)) {
          fileArray.push(filing[year]);
        }
      }

      companyFilingData.push(fileArray);
    }
  }
  return companyFilingData;
}
