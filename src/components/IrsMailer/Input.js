// Input.js
import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};

export default Input;