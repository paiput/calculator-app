import React from "react";
import PropTypes from "prop-types";
import "./themeSwitch.module.css";

function ThemeSwitch({ setTheme }) {
  const handleCheck = event => {
    setTheme(event.target.value);
    localStorage.setItem("theme", event.target.value);
  };

  return (
    <div>
      <input 
        id="theme-1" 
        name="theme-switch" 
        type="radio"
        value="theme-1"
        onClick={handleCheck}
      />
      <label htmlFor="theme-1">1</label>
      <input 
        id="theme-2" 
        name="theme-switch" 
        type="radio"
        value="theme-2"
        onClick={handleCheck}
      />
      <label htmlFor="theme-2">2</label>
      <input 
        id="theme-3" 
        name="theme-switch" 
        type="radio"
        value="theme-3"
        onClick={handleCheck}
      />
      <label htmlFor="theme-3">3</label>
      <span></span>
    </div>
  );
}

ThemeSwitch.propTypes = {
  setTheme: PropTypes.func.isRequired
};

export default ThemeSwitch;