import React from "react";

function ThemeSwitch() {
  return (
    <div>
      <input defaultChecked id="theme-1" name="theme-switch" type="radio" />
      <label htmlFor="theme-1">1</label>
      <input id="theme-2" name="theme-switch" type="radio" />
      <label htmlFor="theme-2">2</label>
      <input id="theme-3" name="theme-switch" type="radio" />
      <label htmlFor="theme-3">3</label>
      <span></span>
    </div>
  );
}

export default ThemeSwitch;