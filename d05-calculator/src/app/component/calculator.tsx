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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-72">
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="w-full p-2 text-right border rounded mb-2 text-lg"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button 
              key={char} 
              onClick={() => (char === '=' ? calculateResult() : handleClick(char))} 
              className="p-4 bg-gray-200 rounded hover:bg-gray-300 text-lg"
            >
              {char}
            </button>
          ))}
          <button onClick={clearInput} className="col-span-4 p-4 bg-red-500 text-white rounded hover:bg-red-600 text-lg">
            Clear
          </button>
        </div>
        {result && <div className="mt-2 p-2 text-right text-lg font-bold">Result: {result}</div>}
      </div>
    </div>
  );
}
