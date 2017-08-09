import React from 'react';

class Company extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default Company;
