import React, { useState } from "react";
import "./App.css";

// Define type for props (if any) - not needed here
function App() {
  // State with type annotation
  const [count, setCount] = useState<number>(0);

  // Function with type
  const increase = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrease = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Hello Rohit 👋</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease}>➖ Decrease</button>
    </>
  );
}

export default App;
