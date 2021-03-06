import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux'
import { store } from './api/redux/store';

ReactDOM.render(
  <Provider store={store}>

    <Helmet>
      <script src="https://scripts.sirv.com/sirv.js"></script>
      <title>Mark Savka</title>
    </Helmet>

    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
