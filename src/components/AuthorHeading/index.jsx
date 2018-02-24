import React from 'react';
import PropTypes from 'prop-types';
import './AuthorHeading.css';


const AuthorHeading = props => (
  <div className="AuthorHeading">
    {props.name}
  </div>
);
AuthorHeading.propTypes = {
  name: PropTypes.string.isRequired,
};
export default AuthorHeading;
