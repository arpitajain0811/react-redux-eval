import React from 'react';
// import PropTypes from 'prop-types';
import AuthorHeading from '../AuthorHeading';
import AuthorBooks from '../AuthorBooks';
import './BooksByAuthor.css';


const BooksByAuthor = () => (
  <div className="BooksByAuthor">
    <AuthorHeading />
    <AuthorBooks />
  </div>
);

export default BooksByAuthor;
