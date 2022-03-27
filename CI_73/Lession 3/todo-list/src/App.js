import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
    },
  ]);

  // const [a, SetA] = useState(1);

  const addTodo = (value) => {
    setTodos([...todos, { text: value }]);
  };

  return (
    <div className="App">
      <Header />
      <TodoAdd addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
