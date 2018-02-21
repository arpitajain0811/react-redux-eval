import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';
import OopsBox from '../OopsBox';
import BooksBody from '../BooksBody';


const Body = (props) => {
  if (props.isEmpty === true) {
    return (
      <div className="Body">
        <OopsBox />
      </div>
    );
  }

  return (
    <div className="Body">
      <BooksBody />
    </div>
  );
};
Body.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
};
export default Body;
