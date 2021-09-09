import React from "react";
import "./TextInput.css";

export default function TextInput({ value, onChange, placeholder }) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
