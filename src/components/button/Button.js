import React from "react";
import "./Button.css";

export function Button({ children, disabled, onClick }) {
  return <button className="button" disabled={disabled} onClick={onClick}>{children}</button>;
}
