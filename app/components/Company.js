import React from 'react';
import {connect} from 'react-redux';
import {toggleSelected} from 'App/actions/actions';

require('ComponentStyles/company');

class Company extends React.Component {
  render() {
    const {name, selected, id, dispatch} = this.props;

    return (
      <div className="company-cell" onClick={() => {
        dispatch(toggleSelected(id, !selected));
      }}>
        <div className="company-selection">
          <input type="checkbox" checked={selected} id="company-selection" name="company-name"/>
          <label htmlFor="company-selection"></label>
        </div>
        <div className="company-name">
          {name}
        </div>
      </div>
    );
  }
}

export default connect()(Company);
