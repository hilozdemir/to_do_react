import React from 'react';
import PropTypes from 'prop-types';



function Header(props) {
  return (
    <header>
      <div className="background-container" aria-hidden="true">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <nav className="navbar">
        <div className="nav-logo">{props.title}</div>
        <button id="themeButton" type="button">🌙 Dark Mode</button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;