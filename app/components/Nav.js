import React from 'react';
import {Link} from 'react-router-dom';

require('ComponentStyles/nav');

const Nav = () => {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <Link to="/">
              <div className="website-title">
                Company Metrics
              </div>
            </Link>
          </div>
        </div>
        <div className="skinny-bar"></div>
      </div>
    );
};

export default Nav;
