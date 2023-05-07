import React from "react";

import { Provider } from "react-redux";
import Router from "./router/Router";
import { store } from "./utilis/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
};

export default App;
