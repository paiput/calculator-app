import React from "react";
import PropTypes from "prop-types";
import styles from "./key.module.css";

function Key({ 
  children, 
  type,
  large,
  id,
  handleClick 
}) {
  return (
    <button id={styles[id]} className={`${type ? styles[type] : styles.default} ${large ? styles.large : ""}`} onClick={() => handleClick(children)}>
      {children}
    </button>
  );
}

Key.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  large: PropTypes.bool,
  id: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Key;