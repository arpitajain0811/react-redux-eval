import React from 'react';
import PropTypes from 'prop-types';
import AuthorHeading from '../AuthorHeading';
import AuthorBooks from '../AuthorBooks';
import './BooksByAuthor.css';


const BooksByAuthor = props => (
  <div className="BooksByAuthor">
    <AuthorHeading name={props.author} />
    <AuthorBooks booksArray={props.books} />
  </div>
);

export default BooksByAuthor;
BooksByAuthor.propTypes = {
  author: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
