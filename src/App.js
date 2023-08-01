import React, { useState, useEffect } from 'react';
import './styles.css';

const PomodoroClock = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const remainingSeconds = seconds % 60;
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTime(25 * 60);
    setIsActive(false);
  };

  return (
    <div className="pomodoro-clock">
      <div className="time">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={handleStartStop}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroClock;
