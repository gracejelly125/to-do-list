import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styled-components/GlobalStyle.js";
import { Provider } from "react-redux";
import store from "./redux/config/config.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>
);
