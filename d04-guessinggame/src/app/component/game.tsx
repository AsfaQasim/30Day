'use client';

import { useState } from 'react';

export default function NumberGuessingGame() {
  const [target, setTarget] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const num = parseInt(guess, 10);
    if (isNaN(num)) {
      setMessage('Please enter a valid number');
      return;
    }
    if (num < target) {
      setMessage('Too low! Try again.');
    } else if (num > target) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Congratulations! You guessed it right!');
    }
  };

  const restartGame = () => {
    setTarget(generateRandomNumber());
    setGuess('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-2xl font-bold">Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleGuess}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Guess
      </button>
      {message && <p className="text-lg font-semibold">{message}</p>}
      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Restart Game
      </button>
    </div>
  );
}
