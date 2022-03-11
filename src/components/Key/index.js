import React from "react";
import PropTypes from "prop-types";
import styles from "./key.module.css";

function Key({ children, type = "default", setDisplayValue }) {
  const handleClick = () => {
    setDisplayValue(children);
  }; 

  return (
    <button className={styles[`${type}`]} onClick={handleClick}>
      {children}
    </button>
  );
}

Key.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  setDisplayValue: PropTypes.func.isRequired
};

export default Key;