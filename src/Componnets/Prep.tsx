import React, { useState } from "react";

// Define props type
interface PrepProps {
  name: string;
}

const Prep: React.FC<PrepProps> = ({ name }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-screen w-full bg-black text-white">
      <h1>this is a {name} {count}</h1>
      <button
        className="bg-green-500 py-2 px-5"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
};

export default Prep;
