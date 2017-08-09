import React from 'react';
import * as d3 from 'd3';

import Company from 'Company';

import jsonData from 'data.json';

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
    console.log(jsonData);
  }

  render() {
    return (
      <Company/>
    );
  }
}

export default CompanyList;
