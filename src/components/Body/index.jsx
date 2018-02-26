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
  componentDidMount() {
    if (this.state.booksArray.length === 0) {
      this.getBooks();
    }
    this.checkDb();
  }
getBooks=() => {
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
              this.setState({
                booksArray: responseBody.booksByAuthor,
                dbEmpty: false,
              });
            });
        }
      });
  });
}
checkDb=() => {
  fetch('/books/local').then(response => response.json())
    .then((responseArray) => {
      if (responseArray.message === 'not empty' && this.state.dbEmpty !== false) {
        this.setState({
          dbEmpty: false,
        });
      }
    });
}

render() {
  if (this.state.dbEmpty === true) {
    return (
      <div className="Body">
        <OopsBox onRefresh={() => { this.getBooks(); }} />
      </div>
    );
  }

  return (
    <div className="Body">
      <BooksBody books={this.state.booksArray} />
    </div>
  );
}
}
export default Body;
