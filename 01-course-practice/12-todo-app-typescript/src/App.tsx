import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ padding: "40px 20px", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#1e293b" }}>Todo Uygulaması</h2>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
