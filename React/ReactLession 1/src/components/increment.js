import React from "react";
import { useState } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="btn-box" onclick={increment}>
      -
    </div>
  );
}

export default Increment;
