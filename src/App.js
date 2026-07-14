import React from 'react';
import Header from './components/header';
import Button from './components/buttons/button';

function TodoList() {
  return (
    <>
      <Header title="Hilal's Todo List" />

      <main className="container">
        <h1>Daily Tasks</h1>

        <div className="input-group">
          <input type="text" id="todoInput" placeholder="Add a new task" />
          <input type="date" id="todoDate" />

          <select id="todoPriority" defaultValue="1">
            <option value="1">🟢 Low</option>
            <option value="2">🟡 Medium</option>
            <option value="3">🔴 High</option>
          </select>

          <Button id="addButton" type="button" label="Add" />
        </div>

        <ul id="todoList"></ul>

        <Button id="clearButton" type="button" label="Clear All" />
      </main>
    </>
  );
}

export default TodoList;
