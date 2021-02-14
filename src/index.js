import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ConfigureStore from "./redux/configureStore";

const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
