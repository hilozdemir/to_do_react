import React from 'react';
import Header from './components/header';
import { AddButton, ClearButton } from './components/buttons/button';
import { TaskInput, DateInput, PrioritySelect } from './components/inputs/input';

function TodoList() {
  return (
    <>
      <Header title="Hilal's Todo List" />

      <main className="container">
        <h1>Daily Tasks</h1>

        <div className="input-group">
          <TaskInput />
          <DateInput />
          <PrioritySelect />

          <AddButton />
        </div>

        <ul id="todoList"></ul>

        <ClearButton />
      </main>
    </>
  );
}

export default TodoList;
