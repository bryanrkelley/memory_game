import React from "react";
import "./Style.css";

const Nav = props => (
  <nav className="fluid">
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/drag-react-clicky/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;