import React from "react";
import PropTypes from "prop-types";
import styles from "./themeSwitch.module.css";

function ThemeSwitch({ setTheme }) {
  const handleCheck = event => {
    setTheme(event.target.value);
    localStorage.setItem("theme", event.target.value);
  };

  const getTheme = () => localStorage.getItem("theme");

  return (
    <div className={styles.themeSwitchContainer}>
      <h3 className={styles.title}>theme</h3>
      <div className={styles.switchContainer}>
        <input 
          id={styles.theme1}  
          name="theme-switch" 
          type="radio"
          value="theme-1"
          defaultChecked={getTheme() === "theme-1"}
          onClick={handleCheck}
        />
        <label htmlFor={styles.theme1}>1</label>
        <input 
          id={styles.theme2} 
          name="theme-switch"
          type="radio"
          value="theme-2"
          defaultChecked={getTheme() === "theme-2"}
          onClick={handleCheck}
        />
        <label htmlFor={styles.theme2}>2</label>
        <input 
          id={styles.theme3}  
          name="theme-switch" 
          type="radio"
          value="theme-3"
          defaultChecked={getTheme() === "theme-3"}
          onClick={handleCheck}
        />
        <label htmlFor={styles.theme3}>3</label>
        <span className={styles.slider}></span>
      </div>
    </div>
  );
}

ThemeSwitch.propTypes = {
  setTheme: PropTypes.func.isRequired
};

export default ThemeSwitch;