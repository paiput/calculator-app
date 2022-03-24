import React from "react";
import PropTypes from "prop-types";
import styles from "./display.module.css";

function Display({ displayValue, inputValue, operator, error }) {
  const numberWithCommas = (number) => {
    // make it not add the commas to numbers after a dot.
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className={`${styles.display} ${operator ? styles.reduced : ""}`}>
      {error 
        ? <span className={styles.errorMsg}>{error}</span>
        : <>
          <span className={styles.inputValue}>
            {numberWithCommas(inputValue)} {operator}
          </span>
          <span className={styles.displayValue}>
            {numberWithCommas(displayValue)}
          </span>
        </>}
    </section>
  );
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

export default Display;