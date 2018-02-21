import React from 'react';
// import PropTypes from 'prop-types';
import './BookBox.css';


const BookBox = () => (
  <div className="BookBox">
    <div className="Book">
      <div className="Picture" ><img src="book.jpg" alt="bookimage" /></div>
      <div className="BookDetails">
        <div className="BookName">name</div>
        <div className="BookRating">0.00</div>
        <div className="BookAuthor">jk rowling</div>
      </div>
    </div>
    {/* <div className="LikeIcon">icon</div> */}
  </div>
);

export default BookBox;
