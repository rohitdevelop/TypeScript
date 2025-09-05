// src/pages/About.tsx
import React, { useState } from "react";
interface PrepProps {
  name: string;   // "name" must be a string
}
 const About: React.FC<PrepProps> = ({name}) => {
   const [count, setCount] = useState<number>(0);

   const increase = (): void => {
    setCount((prev) => prev + 1);
  };

   const decrease = (): void => {
    setCount((prev) => prev - 1);
  };

   const reset = (): void => {
    setCount(0);
  };
 
  return (
    <div className="p-6 flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold mb-4">{name}</h2>

       <p className="text-2xl font-semibold">{count}</p>

       <div className="space-x-4">
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Increase
        </button>

        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Decrease
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default About;
