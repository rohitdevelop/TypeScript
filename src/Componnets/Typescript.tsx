 import React, { useState } from 'react'
 

type jokes = {
  id:number,
  name:string,
  joke:string,
}

const majak: jokes[] =[
    { id: 1, joke: "Believe in yourself!", name: "Rohit Singh" },
    { id: 2, joke: "Keep pushing forward.", name: "Steve Jobs" },
    { id: 3, joke: "Success is no accident.", name: "Pele" },
    { id: 4, joke: "Stay hungry, stay foolish.", name: "Steve Jobs" },
]


 const Typescript: React.FC = () => {
  const [joke , setJoke] = useState<jokes | null>(null)

const handlieclicl = (): void =>{
const change  = Math.floor(Math.random() * majak.length)
setJoke(majak[change])
}; 
  return (
     <div>
  {joke ? (
    <div className="text-center">
      <h1>{joke.joke}</h1>
      <p>{joke.name}</p>
    </div>
  ):(
    <p>click to show a joke </p>
  )};
  <button onClick={handlieclicl}> next</button>     
     </div>
   )
 }
 
 export default Typescript
 