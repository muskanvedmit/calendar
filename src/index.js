import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import RootReducer from "./redux/reducers/index";
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(RootReducer);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
