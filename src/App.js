function TodoList() {
  return (
    <>
      <div className="background-container" aria-hidden="true">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <nav className="navbar">
        <div className="nav-logo">Todo List</div>
        <button id="themeButton" type="button">🌙 Dark Mode</button>
      </nav>

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

          <button id="addButton" type="button">Add</button>
        </div>

        <ul id="todoList"></ul>

        <button id="clearButton" type="button">Clear All</button>
      </main>
    </>
  );
}

export default TodoList;
