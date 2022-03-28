import "./App.css";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
function App() {
  const list = [
    {
      value: "Clean the bedroom",
    },

    {
      value: "Buy some milk",
    },
    {
      value: "Jogging",
    },
    {
      value: "Learn react",
    },
    {
      value: "Doing exercise",
    },
  ];
  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo List</h1>
        <TodoAdd />
        <TodoList todo={list} />
      </div>
    </div>
  );
}

export default App;
