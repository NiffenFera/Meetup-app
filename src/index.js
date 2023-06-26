import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from './store/favorites-cotext';

ReactDOM.render(
  <FavoritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </FavoritesContextProvider>,
  document.getElementById("root")
);
