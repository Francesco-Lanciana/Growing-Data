import React from 'react';


require('ComponentStyles/selected-company');

const SelectedCompany = (props) => (
  <div className="selected-company">
    {props.name}
  </div>
);

export default SelectedCompany;
