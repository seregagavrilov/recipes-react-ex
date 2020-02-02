import React from "react";
import { render } from "react-dom";
import Menu from "./menu";
import data from "./data";

window.React = React;
render(<Menu recipies={data} />, document.getElementById("root"));
