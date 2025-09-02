import React, { useState } from "react";

const Home = () => {
const [text , setText] = useState<string>("")
const [todo , setTodo] = useState<string[]>([])


 function textchange(e:React.ChangeEvent<HTMLInputElement>) {
  setText(e.target.value)
 }

 function handleclick() {
  setTodo([...todo,text])
  setText('')
 }

  return (
    <div className=" h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="w-64 h-80 bg-white text-black text-center">
        <h1>TODO LIST</h1>
        <div className="">
          <input onChange={textchange} value={text} className="bg-black text-white" type="text" />
          <button onClick={handleclick} className="py-2 px-2 rounded-2xl bg-amber-500">add</button>
        </div>

<ul>{todo.map((tod, index)=>(
<li key={index}>{tod}</li>
))}

</ul>
      </div>
    </div>
  );
};

export default Home;
