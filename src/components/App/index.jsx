import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import Body from '../Body';
import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dbEmpty: true,
//     };
//   }
// componentDidMount() {
//   fetch('/books/local').then(response => response.json())
//     .then((responseArray) => {
//       // console.log(responseArray);
//       if (responseArray.message === 'not empty') {
//         this.setState({
//           dbEmpty: false,
//         });
//       }
//     });
// }

const App = () => (
  <div className="App">
    <SideBar />
    <div className="Main">
      <Header />
      <Body />
    </div>
  </div>
);
export default App;
