import React from "react";
import ReactDOM from "react-dom";

// ==========ここから追加する==========
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import Counter from "./components/Counter/container";

const store = createStore(rootReducer);
// ==========ここまで追加する==========

// ==========ここから編集する==========
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
// ==========ここまで編集する==========

ReactDOM.render(<App />, document.getElementById("root"));
