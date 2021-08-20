import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BookReducer } from "./redux/reducers/BookReducer";
import { AuthorReducer } from "./redux/reducers/AuthorReducer";
//import { composeWithDevTools } from "redux-devtools-extension";

const mainreducer = combineReducers({ BookReducer, AuthorReducer });
const store = createStore(mainreducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
