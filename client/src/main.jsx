import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>Hello world!</div>,
//     },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
