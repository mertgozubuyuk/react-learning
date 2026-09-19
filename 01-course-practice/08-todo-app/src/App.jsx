import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(todo) {
    setTodos(todos.filter((item) => item !== todo));
  }

  function editTodo(todoId, content) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, content: content } : todo,
      ),
    );
  }

  return (
    <div className="app-container">
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodoItem={deleteTodo}
        editTodoItem={editTodo}
      />
    </div>
  );
}

export default App;
