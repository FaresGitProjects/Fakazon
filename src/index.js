import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./stateprovider.js";
import reducer, { initalState } from "./reducer.js";

import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initalState} reducer={reducer}>
                <App />
            </StateProvider>
        </BrowserRouter>
    </React.StrictMode>);