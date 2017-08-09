import React from 'react';

class Company extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className="company_name">Company name</p>
        </div>
        <div>
          <p className="metrics">Receivable Days</p>
        </div>
        <div>
          <p className="metrics">Inventory Days</p>
        </div>
        <div>
          <p className="metrics">Payable Days</p>
        </div>
      </div>
    );
  }
}

export default Company;
