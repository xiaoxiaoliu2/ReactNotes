import React from "react";    // main React object exposed by the React library
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);    // using JSX
ReactDOM.createRoot(entryPoint).render(React.createElement(App));  // calling React.createElement, use the custom app component
