import React from "react";
import TodoItem from "./TodoItem";

function ToDoList({todo, ...props}) {
  return (
    <ul>
      {
        todo.map((item, index) => (
        <TodoItem key={index} index={index} value={item.value}/>
      ))}
    </ul>
  );
}

export default ToDoList;