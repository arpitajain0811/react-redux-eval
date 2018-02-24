import React from 'react';
import PropTypes from 'prop-types';
import './AuthorBooks.css';
import BookBox from '../BookBox';


const AuthorBooks = (props) => {
  const booksHolder = [];
  for (let i = 0; i < props.booksArray.length; i += 1) {
    booksHolder.push(<BookBox book={props.booksArray[i]} />);
    console.log('books:', props.booksArray[i]);
  }
  return (
    <div className="AuthorBooks">
      {booksHolder}
    </div>
  );
};

export default AuthorBooks;
AuthorBooks.propTypes = {
  booksArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

