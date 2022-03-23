import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <h1>calc</h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.any.isRequired
};

export default Header;