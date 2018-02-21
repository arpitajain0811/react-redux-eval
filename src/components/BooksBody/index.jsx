import React from 'react';
// import PropTypes from 'prop-types';
import BooksByAuthor from '../BooksByAuthor';
import './BooksBody.css';


const BooksBody = () => (
  <div className="BooksBody">
    <BooksByAuthor />
    <BooksByAuthor />
  </div>
);

export default BooksBody;
