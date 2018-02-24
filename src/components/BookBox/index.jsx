import React from 'react';
import PropTypes from 'prop-types';
import './BookBox.css';


const BookBox = props => (
  <div className="BookBox">
    <div className="Book">
      <div className="Picture" ><img src="harrypotter.jpeg" alt="bookimage" /></div>
      <div className="BookDetails">
        <div className="BookName">{props.book.name}</div>
        <div className="BookRating">{props.book.rating}</div>
        <div className="BookAuthor">{props.book.author}</div>
      </div>
    </div>
    {/* <div className="LikeIcon">icon</div> */}
  </div>
);

export default BookBox;
BookBox.propTypes = {
  book: PropTypes.objectOf.isRequired,
};
