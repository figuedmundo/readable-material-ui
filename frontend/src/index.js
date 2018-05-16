import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "./index.css";
import App from "./views/App.jsx";
import registerServiceWorker from "./registerServiceWorker";

WebFont.load({
  google: {
    families: ["Roboto:300,500,700"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
