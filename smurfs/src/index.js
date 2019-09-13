import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { reducer } from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const smurfStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));//create store with initial state and midleware


ReactDOM.render (//Providing store to app
    <Provider store={smurfStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);