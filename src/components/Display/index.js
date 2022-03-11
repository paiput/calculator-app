import React from "react";
import PropTypes from "prop-types";
import styles from "./display.module.css";

function Display({ displayValue }) {
  return (
    <section className={styles.display}>
      <span>
        {displayValue}
      </span>
    </section>
  );
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired
};

export default Display;