import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './OopsBox.css';

class OopsBox extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
            console.log(responseObj.message);
            fetch('/books/local').then(res => res.json())
              .then((responseBody) => {
                console.log('##', responseBody);
              });
          }
        });
    });
  }
  // const OopsBox = () => (
  render() {
    return (
      <div className="BoxWrapper">
        <div className="OopsBox">
          <div className="OopsText">
            <div className="Oops">Oops ! No books found!</div>
            <div className="Oops">Import them now ?</div>
          </div>
          <button className="RefreshIcon" onClick={() => this.getBooks()} >Refresh</button>
        </div>
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => ({
//   getBooks: () => {
//     dispatch(getBooksFromDb());
//   },
// });
// export default connect(null, mapDispatchToProps)(OopsBox);
export default OopsBox;
// OopsBox.propTypes = {
//   getBooks: PropTypes.func.isRequired,
// };
