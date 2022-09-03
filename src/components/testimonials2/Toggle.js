import React from "react";
import "./toggle.css";

const Toggle = ({ onChange }) => {
  return (
    <label className="InputWrapper">
      <input
        type="checkbox"
        onChange={onChange}
        className="inputWrapper__input"
      />
      <span className="spantoggle" />
    </label>
  );
};

export default Toggle;
