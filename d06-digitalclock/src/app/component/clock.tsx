"use client";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-3xl border border-white/20 text-white text-5xl font-extrabold tracking-wide">
        {time}
      </div>
    </div>
  );
};
export default DigitalClock;
