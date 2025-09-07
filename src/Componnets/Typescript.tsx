import React, { useState } from "react";

// 1. Define type (TS enforces structure)
type Quote = {
  id: number;
  text: string;
  author: string;
};

const Typescript: React.FC = () => {
  // 2. Array of Quote objects
  const quotes: Quote[] = [
    { id: 1, text: "Believe in yourself!", author: "Rohit Singh" },
    { id: 2, text: "Keep pushing forward.", author: "Steve Jobs" },
    { id: 3, text: "Success is no accident.", author: "Pele" },
    { id: 4, text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  ];

  // 3. State can be Quote OR null
  const [quote, setQuote] = useState<Quote | null>(null);

  // 4. Function with return type void
  const handlenext = (): void => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]); // always one Quote object
  };

  return (
    <div className="text-center">
      {/* 5. Conditional rendering with optional state */}
      {quote ? (
        <div>
          <h1>{quote.text}</h1>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>Click "NEXT" to get a quote!</p>
      )}

      <button
        onClick={handlenext}
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
      >
        NEXT
      </button>
    </div>
  );
};

export default Typescript;
