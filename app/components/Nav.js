var React = require('react');

require('ComponentStyles/nav');

var Nav = () => {
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

module.exports = Nav;
