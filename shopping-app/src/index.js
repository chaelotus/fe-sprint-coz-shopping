import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducer from "./Store";
import { composeWithDevTools } from "redux-devtools-extension";
// const rootReducer = combineReducers()
const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({});
let InitialData = localStorage.getItem("bookmark")
  ? { bookmarkItem: JSON.parse(localStorage.getItem("bookmark")) }
  : { bookmarkItem: [] };
const store = createStore(reducer, InitialData, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
