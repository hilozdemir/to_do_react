/**
 *
 * Button.js
 *
 * Renders a button element
 */

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return <button 
    className={props.className} 
    id={props.id} onClick={props.onClick} 
    type={props.type || 'button'}>
    {props.label}
  </button>;
}

function AddButton(props) {
  return <Button
    id="addButton"
    type="button"
    label="Add"
    onClick={props.onClick}
    className={props.className}
  />;
}

function ClearButton(props) {
  return <Button
    id="clearButton"
    type="button"
    label="Clear All"
    onClick={props.onClick}
    className={props.className}
  />;
}

// We require the use of onClick and label, only enforced by react in dev mode
Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

AddButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ClearButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
export { AddButton, ClearButton };

