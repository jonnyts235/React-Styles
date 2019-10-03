import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import ToggleStyles from "./components/toggleStyles";
import Clock from "./components/clock";
import Toggle from "./components/toggle";
import ShowHide from "./components/showHide";
import ColorChange from "./components/changeColor";
import FontSizer from "./components/fontSizer";

import "./styles.css";
const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <ToggleStyles />
      <hr />
      <Clock />
      <hr />
      <ShowHide />
      <hr />
      <Toggle />
      <hr />
      <ColorChange />
      <hr />
      <FontSizer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
