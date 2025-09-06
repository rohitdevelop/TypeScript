 import React, { useState } from "react";

 const Home: React.FC = () => {
 const [text, setText] = useState<string>("");

   const [todo, setTodo] = useState<string[]>([]);
   function taskadd(): void {
    if (text.trim() === "") return; 
    setTodo([...todo, text]);
    setText("");
  }

   function handledelet(index: number): void {
 
     setTodo((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-extrabold mb-8 drop-shadow-lg">
        Welcome to TODO List App
      </h2>

      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center space-y-4 w-96">
        <h1 className="text-2xl font-semibold text-gray-800">TODO</h1>

         <input
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          placeholder="Enter your task..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        />

        <button
          onClick={taskadd}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
        >
          Add
        </button>

        <ul>
          {todo.map((tod, index) => (
            <li key={index} className="flex justify-between items-center">
              {tod}
              <button
                onClick={() => handledelet(index)}
                className="text-red-600 cursor-pointer ml-4"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
