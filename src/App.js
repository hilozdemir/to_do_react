import React, { useState } from 'react';
import Header from './components/header';
import { AddButton, ClearButton } from './components/buttons/button';
import { TaskInput, DateInput, PrioritySelect } from './components/inputs/input';

function TodoList() {
  const [todoText, setTodoText] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todoPriority, setTodoPriority] = useState('1'); //1 vererek kullanıcı seçim yapmadığından otomatik Low seçilir.
  const [todos, setTodos] = useState([]);
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

  const handleClearTodos = () => { //tüm görevleri silme işlemi
    if (todos.length === 0) {
      return;
    }

    const shouldClear = window.confirm('Tum gorevleri silmek istediginize emin misiniz?');

    if (!shouldClear) {
      return;
    }

    setTodos([]);
  };

  const handleDeleteTodo = (todoId) => {  //tek bir görevi silme işlemi
    const shouldDelete = window.confirm('Bu gorevi silmek istediginize emin misiniz?');

    if (!shouldDelete) {
      return;
    }

    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId));
  };

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

              <div className="button-group">
                <button
                  type="button"
                  className="delete-btn todo-delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                  aria-label="Delete todo"
                  title="Delete todo"
                >
                  <span aria-hidden="true">&#128465;</span>
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ClearButton onClick={handleClearTodos} />

      </main>
    </>
  );
}

export default TodoList;
