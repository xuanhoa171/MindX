import { useState } from "react";
import "./App.css";
import Increment from "./component/Increment";
import Decrement from "./component/Decrement";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Count count={count} />
      <Increment increment={increment} />
      <Decrement decrement={decrement} />
    </div>
  );
}

function Count(props) {
  return <div>COUNT = {props.count}</div>;
}

export default App;
