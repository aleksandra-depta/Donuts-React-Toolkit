import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import Container from "react-bootstrap/Container";
import { store } from "./store";
import App from "./App";

import "./index.scss";
import { COLORS } from "./styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: COLORS,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container>
            <App />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
