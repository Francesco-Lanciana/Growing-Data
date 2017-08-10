import React from 'react';

require('ComponentStyles/nav');

const Nav = () => {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <div className="website-title">
              Company Metrics
            </div>
          </div>
        </div>
        <div className="skinny-bar"></div>
      </div>
    );
};

export default Nav;
