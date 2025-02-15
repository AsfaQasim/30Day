'use client';
import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: number | string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-2xl w-80 border border-gray-300">
        
        {/* Display Screen */}
        <div className="bg-white text-right text-2xl p-4 rounded-lg shadow-inner mb-4 min-h-[80px] flex flex-col justify-between">
          <div className="text-gray-500 text-lg">{input || "0"}</div>
          <div className="font-bold text-black">{result}</div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() => (char === '=' ? calculateResult() : handleClick(char))}
              className={`p-4 text-xl font-semibold rounded-lg shadow-md transition-all duration-200 
                ${char === "=" ? "bg-green-500 text-white hover:bg-green-600" : 
                  ["+", "-", "*", "/"].includes(char) ? "bg-orange-500 text-white hover:bg-orange-600" : 
                  "bg-gray-200 text-gray-800 hover:bg-gray-300"}
              `}
            >
              {char}
            </button>
          ))}

          {/* Clear Button */}
          <button 
            onClick={clearInput} 
            className="col-span-4 p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 text-xl font-bold"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
