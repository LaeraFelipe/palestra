import React from "react";
import logo from "../../../logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <p>
        Primeiros passos com <code>React.js</code>
      </p>
    </header>
  );
}
