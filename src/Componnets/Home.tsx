import React, { useState } from "react";
const Home = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
const [btntext, setBtntext] = useState("Add")
const [editindex, setEditindex] = useState(null)
  function handlechange(e) {
    setText(e.target.value);
  }
  function handleclick() {
    if (text === '') {
      alert("add task")
    }
    if (editindex === null) {
      setTasks([...tasks,text]);   
    } else {
      const updatedtask = tasks.map((task,i)=> i === editindex ?text:task)
      setTasks(updatedtask)
    }
    setBtntext("Add")    
setText('')
     
    }
  

 function handldlete(index) {
  setTasks(tasks.filter((item,i)=> i !== index))
  setBtntext("Add")
}

function handleedit(index) {
  setEditindex(index); 
  setText(tasks[index])
  
  // setTasks(tasks.filter((item,i)=> i !== index))
setBtntext("update")
  }
  return (
    <div className="border p-20">
      <div className="flex justify-center items-center gap-2">
        <input
          value={text}
          onChange={handlechange}
          type="text"
          placeholder="enter task"
        />
        <button onClick={handleclick} className={`py-5 px-5 text-white ${btntext === "Add" ? "bg-amber-700" : "bg-green-700"}`}>
          {btntext}
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task} <span className="text-red-900 border"  onClick={() => handldlete(index)}>delete</span> <span className="text-green-600
          border pr-2" onClick={() => handleedit(index)}>edit</span></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
