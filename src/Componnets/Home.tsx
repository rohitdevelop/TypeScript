import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [btntext, setBtntext] = useState<string>("Add");
  const [editindex, setEditindex] = useState<number | null>(null);

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleclick() {
    if (text === "") {
      alert("add task");
      return; // STOP HERE
    }

    if (editindex === null) {
      setTasks([...tasks, text]);
    } else {
      const updatedtask = tasks.map((task, i) =>
        i === editindex ? text : task
      );
      setTasks(updatedtask);
      setEditindex(null); // RESET EDIT MODE
    }

    setBtntext("Add");
    setText("");
  }

  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  const firstload = React.useRef(true) 
  // Save tasks to localStorage
  useEffect(() => {
    if (firstload.current) {
      firstload.current = false;
      return
    }
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handldlete(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
    setBtntext("Add");
    setEditindex(null);
  }

  function handleedit(index: number) {
    setEditindex(index);
    setText(tasks[index]);
    setBtntext("Update");
  }

  return (
    <div className="border p-20">
      <div className="flex justify-center items-center gap-2">
        <input
          value={text}
          onChange={handlechange}
          type="text"
          placeholder="enter task"
          className="border p-2"
        />
        <button
          onClick={handleclick}
          className={`py-2 px-2 text-white ${
            btntext === "Add" ? "bg-amber-700" : "bg-green-700"
          }`}
        >
          {btntext}
        </button>
      </div>

      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <span
              className="text-red-900 border px-1 cursor-pointer"
              onClick={() => handldlete(index)}
            >
              delete
            </span>{" "}
            <span
              className="text-green-600 border px-1 cursor-pointer"
              onClick={() => handleedit(index)}
            >
              edit
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
