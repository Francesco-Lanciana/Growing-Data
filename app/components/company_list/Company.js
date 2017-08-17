import React from 'react';

// Keep as class, to be used by companyList to update redux stores state
class Company extends React.Component {

  //Disable input if no filing data is available
  renderInput(selected, noData) {
    if (noData) {
      return (<input type="checkbox" checked={selected} id="company-selection" name="company-name" disabled onChange={() => ''}/>);
    }
    return (
      <input type="checkbox" checked={selected} id="company-selection" name="company-name" onChange={() => ''}/>
    )
  }

  render() {
    const {name, selected, noData, onSelect} = this.props;
    let cellClassName = "company-cell";
    let nameClassName = "company-name"
    if (noData) {
      cellClassName = "company-cell no-data";
      nameClassName = "company-name no-data";
    }
    return (
      <div className={cellClassName} onClick={() => onSelect(this)}>

        <div className="company-selection">
          {this.renderInput(selected, noData)}
          <label htmlFor="company-selection"></label>
        </div>

        <div className={nameClassName}>
          {name}
        </div>

      </div>
    );
  }
}

export default Company;
