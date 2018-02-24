import React from 'react';
import PropTypes from 'prop-types';
import './OopsBox.css';

const OopsBox = props => (
  <div className="BoxWrapper">
    <div className="OopsBox">
      <div className="OopsText">
        <div className="Oops">Oops ! No books found!</div>
        <div className="Oops">Import them now ?</div>
      </div>
      <button className="RefreshButton" onClick={() => { props.onRefresh(); }} >
        <img className="RefreshIcon" src="refresh.png" alt="Refresh" />
      </button>
    </div>
  </div>
);

export default OopsBox;
OopsBox.propTypes = {
  onRefresh: PropTypes.func.isRequired,
};
