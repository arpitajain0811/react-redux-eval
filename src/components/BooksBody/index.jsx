import React from 'react';
import PropTypes from 'prop-types';
import BooksByAuthor from '../BooksByAuthor';
import './BooksBody.css';


const BooksBody = (props) => {
  // console.log('props', props.books);
  const authors = Object.keys(props.books);
  // console.log('author:', authors);
  const bookHolder = [];
  for (let i = 0; i < authors.length; i += 1) {
    const currAuthor = authors[i];
    // console.log(props.books[currAuthor]);
    bookHolder.push((<BooksByAuthor
      author={authors[i]}
      books={props.books[currAuthor]}
    />
    ));
  }
  return (
    <div className="BooksBody">
      {bookHolder}
      {/* <BooksByAuthor />
      <BooksByAuthor /> */}
    </div>
  );
};
BooksBody.propTypes = {
  // books: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  books: PropTypes.objectOf.isRequired,
};
export default BooksBody;
