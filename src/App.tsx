// task 1 complete

// import React, { useState } from 'react'
 
//  const App = () => {
//   let [number , setNumber] = useState<number>(1)
//     return (
//      <div>
//        <p>hello my name is rohit singh and i am {number} years old</p>
// <button onClick={() => setNumber(number+1)}> add age</button>
// <button onClick={() => setNumber(number-1)}> minus age</button>
// <button onClick={() => setNumber(number = 1)}> reset age</button>
//      </div>
//    )
//  }
 
//  export default App
// task 2
import React, { useState } from "react";

// Correct type
type User = {
  name: string;
  age: number;
  isStudent: boolean;
};

const App = () => {
  // Initial value given
  const [info, setInfo] = useState<User>({
    name: "Rohit Singh",
    age: 19,
    isStudent: true,
  });

  // Function to update info
  const updateUser = () => {
    setInfo({
      ...info, // spread old values
      name: "Aman", // update name
      age: info.age + 1, // increase age
      isStudent: !info.isStudent, // toggle student status
    });
  };

  return (
    <div>
      <p>Name = {info.name}</p>
      <p>Age = {info.age}</p>
      <p>Student = {info.isStudent ? "Yes" : "No"}</p>

      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default App;
