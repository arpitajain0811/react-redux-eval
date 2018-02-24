import React from 'react';
// import PropTypes from 'prop-types';
import './Body.css';
import OopsBox from '../OopsBox';
import BooksBody from '../BooksBody';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbEmpty: true,
      booksArray: [],
    };
  }
getBooks=() => {
  // console.log('getbooks');
  fetch('/book', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  }).then((response) => {
    response.json()
      .then((responseObj) => {
        if (responseObj.message === 'Books added to database') {
          fetch('/books/local').then(res => res.json())
            .then((responseBody) => {
              // console.log('response', responseBody.booksByAuthor);
              this.setState({
                booksArray: responseBody.booksByAuthor,
                dbEmpty: false,
              });
              // this.props.getBooksToStore(responseBody);
            });
        }
      });
  });
}
checkDb=() => {
  fetch('/books/local').then(response => response.json())
    .then((responseArray) => {
      // console.log(responseArray);
      if (responseArray.message === 'not empty' && this.state.dbEmpty !== false) {
        this.setState({
          dbEmpty: false,
        });
      }
    });
}

render() {
  this.checkDb();
  if (this.state.dbEmpty === true) {
    return (
      <div className="Body">
        <OopsBox onRefresh={() => { this.getBooks(); }} />
      </div>
    );
  }
  if (this.state.booksArray.length === 0) { this.getBooks(); }
  return (
    <div className="Body">
      <BooksBody books={this.state.booksArray} />
    </div>
  );
}
}
// Body.propTypes = {
//   isEmpty: PropTypes.bool.isRequired,
// };
export default Body;
