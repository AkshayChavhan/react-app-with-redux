import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';

const reducer = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + 1;
  }
  else if (action.type === "REMOVE") {
    return state - 1;
  }
  return state;
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <h1>The tiniest React + Redux boilerplate!</h1>
    <App />
  </Provider>
);

reportWebVitals();
