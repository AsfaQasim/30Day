"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function BirthdayWish() {
  const [showWish, setShowWish] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center px-4 overflow-hidden">
      {/* 🎊 Confetti Effect */}
      {showWish && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* 🎉 Happy Birthday Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        🎉 Happy Birthday! 🎉
      </motion.h1>

      {/* 📅 Special Date */}
      <motion.h2
        className="text-2xl md:text-3xl mt-4 bg-white text-pink-600 px-6 py-3 rounded-xl shadow-lg font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* This Day is Very Special Day  9 / March / 2000 */}
      </motion.h2>

      {/* 🎂 Floating Cake */}
      <motion.div
        className="text-9xl mt-6"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        🎂
      </motion.div>

      {/* 🎁 Surprise Button */}
      <motion.button
        onClick={() => setShowWish(true)}
        className="mt-6 px-8 py-3 text-lg font-semibold bg-white text-pink-600 rounded-full shadow-lg transition hover:bg-pink-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click for a Surprise
      </motion.button>

      {/* 🎊 Birthday Message Reveal */}
      {showWish && (
        <motion.p
          className="mt-6 text-2xl bg-white text-pink-700 px-6 py-4 rounded-lg shadow-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🎈 Enjoy a Beautiful Birthday Filled with Happiness & Joy! May Allah success you more in every steps of life!! 🎁🎂✨
        </motion.p>
      )}
    </div>
  );
}
