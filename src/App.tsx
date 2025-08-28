import React, { useState } from "react";

const App = () => {
  const [isClicked, setIsClicked] = useState<boolean>(true);

  function handleClick() {
    if (isClicked) {
      console.log("click");
    } else {
      console.log("not click");
    }
    setIsClicked(!isClicked); // toggle state
  }

  return (
    <div>
      <h1>{isClicked ? "True hai" : "False hai"}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
