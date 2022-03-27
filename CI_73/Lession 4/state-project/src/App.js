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
      <div className="btn-box">
        {/* <div className="btn" onClick={decrement}>
          -
        </div>
        <div className="btn" onClick={increment}>
          +
        </div> */}
        <Increment />
        <Decrement />
      </div>
    </div>
  );
}

export default App;

function Count(props) {
  console.log(props);
  return <div className="value">count = {props.count} </div>;
}
