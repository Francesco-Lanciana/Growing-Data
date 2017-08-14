import React from 'react';
import {Link} from 'react-router-dom';
import Media from 'react-media';
import AnalysisButton from 'Components/selection_screen/AnalysisButton';

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
          <div className="top-bar-right">
            <Media query="(max-width: 800px)" render={() => (
              <div id="analysis-button">
                <AnalysisButton/>
              </div>
            )}/>
          </div>
        </div>
        <div className="skinny-bar"></div>
      </div>
    );
};

export default Nav;
