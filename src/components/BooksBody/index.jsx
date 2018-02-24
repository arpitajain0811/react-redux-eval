import React from 'react';
import PropTypes from 'prop-types';
import BooksByAuthor from '../BooksByAuthor';
import './BooksBody.css';

const BooksBody = (props) => {
  const authors = Object.keys(props.books);
  const bookHolder = [];
  for (let i = 0; i < authors.length; i += 1) {
    const currAuthor = authors[i];
    bookHolder.push((<BooksByAuthor
      author={authors[i]}
      books={props.books[currAuthor]}
    />
    ));
  }
  return (
    <div className="BooksBody">
      {bookHolder}
    </div>
  );
};
BooksBody.propTypes = {
  books: PropTypes.objectOf.isRequired,
};
export default BooksBody;
