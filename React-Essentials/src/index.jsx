// main entry point of React app
import ReactDOM from "react-dom/client";   // React library -> ReactDOM: responsible for outputting the App component's content on the screen

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
