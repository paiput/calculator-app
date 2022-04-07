import React from "react";
import PropTypes from "prop-types";
import styles from "./display.module.css";

function Display({ displayValue, inputValue, showOperation, operator, error }) {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className={`${styles.display} ${(operator && showOperation) ? styles.reduced : ""}`}>
      {error 
        ? <span className={styles.errorMsg}>{error}</span>
        : <>
          <span className={styles.inputValue}>
            {showOperation ? <>{numberWithCommas(inputValue)} {operator}</> : ""}
          </span>
          <span className={styles.displayValue}>
            {showOperation ? numberWithCommas(displayValue) : numberWithCommas(inputValue)}
          </span>
        </>
      }
    </section>
  );
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  showOperation: PropTypes.bool.isRequired,
  operator: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

export default Display;