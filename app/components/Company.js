import React from 'react';

require('ComponentStyles/company');

class Company extends React.Component {
  render() {
    return (
      <div>
        <div class="company-selection">
          <input type="checkbox" value="None" id="company-selection" name="check" checked />
          <label for="company-selection"></label>
        </div>
        <div className="company-name">
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default Company;
