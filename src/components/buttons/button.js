/**
 *
 * Button.js
 *
 * Renders a button element
 */

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return <button className={props.className} id={props.id} onClick={props.onClick} type={props.type || 'button'}>
    {props.label}
  </button>;
}

// We require the use of onClick and label, only enforced by react in dev mode
Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Button;

