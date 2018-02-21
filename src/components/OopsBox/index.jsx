import React from 'react';
// import PropTypes from 'prop-types';
import './OopsBox.css';


const OopsBox = () => (
  <div className="BoxWrapper">
    <div className="OopsBox">
      <div className="OopsText">
        <div className="Oops">Oops ! No books found!</div>
        <div className="Oops">Import them now ?</div>
      </div>
      <div className="RefreshIcon" />
    </div>
  </div>
);

export default OopsBox;
