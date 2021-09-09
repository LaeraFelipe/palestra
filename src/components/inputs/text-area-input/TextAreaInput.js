import React from "react";
import "./TextAreaInput.css";

export function TextAreaInput({ value, onChange, placeholder }) {
  return (
    <textarea
      className="input"
      rows={5}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
