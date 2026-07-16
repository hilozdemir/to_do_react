import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { AddButton } from './components/buttons/button';
import { TaskInput, DateInput, PrioritySelect } from './components/inputs/input';

function TodoList() {
  const [todoText, setTodoText] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todoPriority, setTodoPriority] = useState('1'); //1 vererek kullanıcı seçim yapmadığından otomatik Low seçilir.
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem('todos');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const priorityLabels = {
    '1': 'Low',
    '2': 'Medium',
    '3': 'High',
  };
  const priorityClassNames = { //css classlarını tanımladık.
    '1': 'priority-1',
    '2': 'priority-2',
    '3': 'priority-3',
  };

  const handleAddTodo = () => {
    const trimmedText = todoText.trim(); //gereksiz boşluklar kaldırıldı.

    if (!trimmedText) {
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos, //eski verileri tutmak için kullanıyoruz üstüne yeni todo ekleniyor.
      {
        id: Date.now(),
        text: trimmedText,
        date: todoDate,
        priority: todoPriority,
      },
    ]);

    setTodoText('');
    setTodoDate('');
    setTodoPriority('1');
  };

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
      // ignore write errors (e.g., storage full)
    }
  }, [todos]);

  return (
    <>
      <Header title="Hilal's Todo List" />

      <main className="container">
        <h1>Daily Tasks</h1>

        <div className="input-group">
          <TaskInput value={todoText} onChange={(event) => setTodoText(event.target.value)} />
          <DateInput value={todoDate} onChange={(event) => setTodoDate(event.target.value)} />
          <PrioritySelect value={todoPriority} onChange={(event) => setTodoPriority(event.target.value)} />
          <AddButton onClick={handleAddTodo} />
        </div>

        <ul id="todoList">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div className="task-content">
                <span className="todo-text">
                  {todo.text}
                </span>
                {todo.date && <small>({todo.date})</small>}
              </div>

              <span className={`priority-badge ${priorityClassNames[todo.priority]}`}>
                {priorityLabels[todo.priority]}
              </span>
            </li>
          ))}
        </ul>

      </main>
    </>
  );
}

export default TodoList;
