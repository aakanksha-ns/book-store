import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import ChapterStore from "./containers/ChapterApp";
import chapterApp from "./reducers/chapterApp"

ReactDOM.render(
  <Provider store={createStore(chapterApp, applyMiddleware(thunk))}>
    <ChapterStore />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
