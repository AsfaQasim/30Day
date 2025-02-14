"use client";
import React, { useState } from "react";

const CountdownTimer = () => {
  const [count, setCount] = useState(0);

  // Function to increment count
  function addVal() {
    setCount(count + 1);
  }

  // Function to decrement count
  function delVal() {
    setCount(count - 1);
  }

  // Function to reset count
  function reset() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Simple Counter</h1>
        <h2 className="text-5xl font-bold mb-6">{count}</h2>
        <div className="flex space-x-4">
          <button
            onClick={addVal}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg transition"
          >
            ➕ Increment
          </button>
          <button
            onClick={delVal}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg transition"
          >
            ➖ Decrement
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg transition"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
