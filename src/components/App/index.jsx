import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import Body from '../Body';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbEmpty: true,
    };
  }
  componentDidMount() {
    fetch('/books/local').then(response => response.json())
      .then((responseArray) => {
        // const responseString = JSON.stringify(responseBody);
        // console.log('$$$', responseArray);
        // this.props.getNotes(responseArray);
        if (responseArray.length !== 0) {
          // console.log('$$$', responseString);
          this.setState({
            dbEmpty: false,
          });
        }
      });
  }
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="Main">
          <Header />
          <Body isEmpty={this.state.dbEmpty} />
        </div>
      </div>
    );
  }
}
export default App;
