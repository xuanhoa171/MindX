import "./App.css";
import { useState } from "react";
const colors = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "green",
  },
  {
    id: 3,
    color: "blue",
  },
];
function App() {
  const [checked, setChecked] = useState(1);
  const [color, setColor] = useState("red");
  const Next = (id) => {
    if (checked === colors.length) {
      setColor("red");
      setChecked(1);
    } else {
      setColor(colors[checked].color);
      setChecked(checked + 1);
    }
  };
  return (
    <div className="App">
      <h1>Tín hiệu đèn giao thông</h1>
      {colors.map((light) => (
        <input
          key={light.id}
          type="radio"
          checked={checked === light.id}
          onChange={() => {
            setChecked(light.id);
          }}
          style={{ accentColor: color }}
        />
      ))}
      <button onClick={Next}>Next</button>
    </div>
  );
}

export default App;
