import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// TODO MVC 预设样式
import "todomvc-app-css/index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
