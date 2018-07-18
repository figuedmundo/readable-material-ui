/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "./index.css";
import App from "./views/App.js";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";


WebFont.load({
  google: {
    families: ["Roboto:300,500,700"]
  }
});

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);
registerServiceWorker();
