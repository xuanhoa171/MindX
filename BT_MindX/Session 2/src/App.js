
import './App.css';

import ToDoList from './components/ToDoList';
// import TodoItem from './components/ToDoItem';
import TodoAdd from './components/TodoAdd';

function App() {
  const list = [
    {
      value: 'Clean the bedroom'
    },

    {
      value: 'Buy some milk'
    },
    {
      value: "Jogging"
    },
    {
      value: "Learn react"
    },
    {
      value: "Doing exercise"
    }
  ];


  // -------------------------
  return (
    <div className="App">
      <div className ='App-header'>
      <h1>Todo List</h1>
      <TodoAdd />
      <ToDoList todo = {list}/>
      </div>
    </div>
  );
}

export default App;
