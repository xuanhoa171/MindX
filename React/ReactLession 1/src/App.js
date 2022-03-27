import "./App.css";
import { useState } from "react";
import { increment } from "react";
import { decrement } from "react";
function App() {
  return (
    <div className="App">
      <count />
      <div className="btn-box">
        <increment />
        <decrement />
      </div>
    </div>
  );
}

export default App;
function Count(props) {
  return <h1> {props.count} </h1>;
}
