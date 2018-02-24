import React from 'react';
import PropTypes from 'prop-types';
import BooksByAuthor from '../BooksByAuthor';
import './BooksBody.css';


const BooksBody = (props) => {
  // console.log(props.books);
  const bookHolder = [];
  for (let i = 0; i < props.books.length; i += 1) {
    bookHolder.push((<BooksByAuthor
      books={props.books[i]}
      // id={props.notesArray[i].noteId}
      // title={props.notesArray[i].noteTitle}
      // content={props.notesArray[i].noteBody}
    />
    ));
  }
  return (
    <div className="BooksBody">
      {/* {bookHolder} */}
      <BooksByAuthor />
      <BooksByAuthor />
    </div>
  );
};
BooksBody.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default BooksBody;
