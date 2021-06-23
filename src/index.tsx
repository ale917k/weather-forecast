import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "context";
import GlobalStyles from "globalStyles";
import App from "App";
import reportWebVitals from "reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
