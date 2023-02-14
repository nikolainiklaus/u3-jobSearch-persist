import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      {/* PersistGate is the proper "persistency layer" */}
      <App />
    </PersistGate>
  </Provider>
);
