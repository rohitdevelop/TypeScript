import React, { useState } from "react";

// 1. Define the type of a Quote
interface Quote {
  id: number;
  text: string;
  author: string;
}

const Typescript: React.FC = () => {
  // 2. Quotes list (array of objects)
  const quotes: Quote[] = [
    { id: 1, text: "Believe in yourself!", author: "Rohit Singh" },
    { id: 2, text: "Keep pushing forward.", author: "Steve Jobs" },
    { id: 3, text: "Success is no accident.", author: "Pele" },
    { id: 4, text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  ];

  // 3. useState with Quote type (or undefined initially)
  const [quote, setQuote] = useState<Quote | null>(null);

  // 4. Function to generate random quote
  const getRandomQuote = (): void => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Random Quote Generator</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
        {quote ? (
          <>
            <p className="text-xl italic">"{quote.text}"</p>
            <p className="mt-4 text-gray-400">- {quote.author}</p>
          </>
        ) : (
          <p className="text-gray-400">Click below to get a quote!</p>
        )}
      </div>

      <button
        onClick={getRandomQuote}
        className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition duration-300"
      >
        Get Quote
      </button>
    </div>
  );
};

export default Typescript;

