import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(5);

  const handleIncrease = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  return (
    <div className="app">
      <h1>Click Counter with Limit</h1>

      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />

      <button onClick={handleIncrease} disabled={count >= limit}>
        +1
      </button>

      <p>Count: {count}</p>

      {count >= limit && <p className="limit-msg">Limit reached!</p>}
    </div>
  );
}
