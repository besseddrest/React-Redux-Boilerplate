import 'babel-polyfill'; // transpiles ES6 to ES5
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// curly braces allows us to use `createStore` like a function w/o declaring a new var
import {createStore} from 'redux';
import allReducers from './reducers'; // const allReducers
import App from './components/app.js';

const store = createStore(allReducers); // creates the centralized application state

ReactDOM.render(
    // Provider here will make store available to every single component
    // & every single component/container will have access to all application's data
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
