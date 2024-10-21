import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    // setCount(count - 1)
    if (count === 0) {
      alert("Count cannot be less than");
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div
      id="main"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-400"
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-400">
        <h1 className="px-4 py-2 font-bold text-4xl text-center text-blue-600 uppercase">
          Counter Application in React
        </h1>
        
        <h1 className="mt-4 text-2xl font-semibold text-gray-700 text-center uppercase">
          Count: <span className="text-blue-500 text-2xl">{count}</span>
        </h1>
        
        <div className="flex space-x-4 mt-6 justify-center">
          <button
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
            onClick={() => reset(setCount(0))}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
