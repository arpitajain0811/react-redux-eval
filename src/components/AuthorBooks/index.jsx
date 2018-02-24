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
    console.log('component did mount');
    this.getLikes();
  }
  getLikes = () => {
    fetch('/likes').then(response =>
      response.json()).then((resJson) => {
      console.log(resJson);
      this.setState({
        likesArray: resJson,
      });
    });
  }
  putLike=(id) => {
    console.log('put like', id);
    fetch(`/like/${id}`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'PUT',
    }).then(() => {
      this.getLikes();
    });
  }
  render() {
    const booksHolder = [];
    let isLiked = 0;
    for (let i = 0; i < this.props.booksArray.length; i += 1) {
      for (let j = 0; j < this.state.likesArray.length; j += 1) {
        if (this.state.likesArray[j].bookId === this.props.booksArray[i].bookId) {
          isLiked = this.state.likesArray[j].liked;
        } else { isLiked = 0; }
      }
      booksHolder.push(<BookBox book={this.props.booksArray[i]} liked={isLiked} onLike={(id) => { this.putLike(id); }} />);
      console.log('liked?:', isLiked);
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

