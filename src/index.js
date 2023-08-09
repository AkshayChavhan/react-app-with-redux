import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import countReducer from './Redux/reducer/countReducer';


const store = createStore(countReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <h1>The tiniest React + Redux boilerplate!</h1>
    <App />
  </Provider>
);

reportWebVitals();
