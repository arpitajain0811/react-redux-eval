import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

const Render = () => { ReactDOM.render(<App />, document.getElementById('root')); };
export default Render;
