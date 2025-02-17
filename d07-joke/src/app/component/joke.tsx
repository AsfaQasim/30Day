"use client";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      if (!response.ok) throw new Error("Failed to fetch joke");
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-md">
        😂 Random Joke Generator
      </h1>
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl p-6 rounded-2xl w-[90%] max-w-lg text-center border border-white/20 transition-all hover:scale-105">
        {joke ? (
          <>
            <p className="text-xl font-semibold text-white">{joke.setup}</p>
            <p className="text-lg mt-3 text-yellow-400 font-medium animate-bounce">{joke.punchline}</p>
          </>
        ) : (
          <p className="text-gray-400 italic">Click below to get a joke!</p>
        )}
      </div>
      <button
        onClick={fetchJoke}
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110"
        disabled={loading}
      >
        {loading ? "😂 Loading..." : "🎭 Get a Joke"}
      </button>
    </div>
  );
}
