import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';


const Header = () => (
  <div className="Header">
    <div className="BookShelf">
      <div className="Text">
    The <span className="bigBook">Book </span>Shelf
      </div>
      <div className="Line"><hr /></div>
    </div>
  </div>
);

export default Header;

// Header.propTypes = {
//   text: PropTypes.string.isRequired,
// };
