import React from "react";
import PropTypes from "prop-types";

function Header({ children }) {
  return (
    <header>
      <span>calc</span>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.any.isRequired
};

export default Header;