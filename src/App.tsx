import React, { useState } from "react";

// 1️⃣ Define a Type (interface) for a Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // 2️⃣ useState with type <Todo[]> → array of Todo objects
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>(""); // input value

  // 3️⃣ Add a new todo
  const addTodo = () => {
    if (newTodo.trim() === "") return; // avoid empty todo

    const todo: Todo = {
      id: Date.now(), // unique id
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]); // add new todo to state
    setNewTodo(""); // clear input
  };

  // 4️⃣ Toggle complete / incomplete
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 5️⃣ Delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>✅ Todo App (TypeScript)</h1>

      {/* Input field */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // event typing auto inferred
        placeholder="Enter a task..."
      />

      {/* Add button */}
      <button onClick={addTodo}>Add</button>

      {/* Todo list */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              margin: "10px",
            }}
          >
            {todo.text}

            {/* Toggle Button */}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>

            {/* Delete Button */}
            <button onClick={() => deleteTodo(todo.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
