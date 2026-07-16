/**
 *
 * Input.js
 *
 * Renders reusable input and select elements
 */

import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <input
      className={props.className}
      id={props.id}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type || 'text'}
      value={props.value}
      defaultValue={props.defaultValue}
    />
  );
}

function Select(props) {
  return (
    <select
      className={props.className}
      id={props.id}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      value={props.value}
    >
      {props.children}
    </select>
  );
}

function TaskInput(props) {
  return <Input id="todoInput" type="text" placeholder="Add a new task" onChange={props.onChange} className={props.className} />;
}

function DateInput(props) {
  return <Input id="todoDate" type="date" onChange={props.onChange} className={props.className} />;
}

function PrioritySelect(props) {
  return (
    <Select id="todoPriority" defaultValue="1" onChange={props.onChange} className={props.className}>
      <option value="1">🟢 Low</option>
      <option value="2">🟡 Medium</option>
      <option value="3">🔴 High</option>
    </Select>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

TaskInput.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
};

DateInput.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
};

PrioritySelect.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
export { Select, TaskInput, DateInput, PrioritySelect };