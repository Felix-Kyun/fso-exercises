import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

const App = () => {
  const actionDispatcher = (type) => store.dispatch({ type });
  const good = () => actionDispatcher("GOOD");
  const ok = () => actionDispatcher("OK");
  const bad = () => actionDispatcher("BAD");
  const reset = () => actionDispatcher("ZERO");

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

renderApp();
store.subscribe(renderApp);
