import React from "react";
import PropTypes from "prop-types";
import styles from "./keyPad.module.css";

function KeyPad({ children }) {
  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  );
}

KeyPad.propTypes = {
  children: PropTypes.any.isRequired
};

export default KeyPad;