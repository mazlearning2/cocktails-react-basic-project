import React from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App/App";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
