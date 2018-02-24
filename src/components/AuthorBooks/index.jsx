import React from 'react';
import PropTypes from 'prop-types';
import './AuthorBooks.css';
import BookBox from '../BookBox';


class AuthorBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesArray: [],
    };
  }
  componentDidMount() {
    this.getLikes();
  }
  getLikes = () => {
    fetch('/likes').then(response =>
      response.json()).then((resJson) => {
      // console.log(resJson);
      this.setState({
        likesArray: resJson,
      });
    });
  }
  putLike=(id) => {
    for (let i = 0; i < this.state.likesArray.length; i += 1) {
      if (this.state.likesArray[i].bookId === id && this.state.likesArray[i].liked === 1) {
        fetch(`/unlike/${id}`, {
          headers: {
            'content-type': 'application/json',
          },
          method: 'PUT',
        }).then((response) => {
          console.log('unlike', response);
          this.getLikes();
        });
        return;
      }
    }
    fetch(`/like/${id}`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'PUT',
    }).then((response) => {
      console.log('like', response);
      this.getLikes();
    });
  }
  render() {
    const booksHolder = [];

    for (let i = 0; i < this.props.booksArray.length; i += 1) {
      let isLiked = 0;
      for (let j = 0; j < this.state.likesArray.length; j += 1) {
        if (this.state.likesArray[j].bookId === this.props.booksArray[i].bookId) {
          isLiked = this.state.likesArray[j].liked;
        }
      }
      booksHolder.push(<BookBox book={this.props.booksArray[i]} liked={isLiked} onLike={(id) => { this.putLike(id); }} />);
    }
    return (
      <div className="AuthorBooks">
        {booksHolder}
      </div>
    );
  }
}

export default AuthorBooks;
AuthorBooks.propTypes = {
  booksArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

