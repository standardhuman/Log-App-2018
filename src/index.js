import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import start from "./reducers";

import Start from "./components/Start";

ReactDOM.render(<Start />, document.getElementById("root"));


const store = createStore(start);
const rootEl = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Start
      value={store.getState()}
      onLogin={() => store.dispatch({ type: "LOGIN" })}
      onSignUp={() => store.dispatch({ type: "SIGNUP" })}
    />,
    rootEl
  );

render();
store.subscribe(render);
