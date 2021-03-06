import React from 'react';
import ReactDOM from 'react-dom';
// initializing redux
// provider keeps track of a global state, allows us to access to the store from anywhere
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);