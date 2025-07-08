import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const internalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning) {
      internalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(internalIdRef.current);
    }

  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let secounds = Math.floor(elapsedTime / (1000) % 60);
    let milisecounds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,'00');
    minutes = String(minutes).padStart(2, "00");
    secounds = String(secounds).padStart(2, "00");
    milisecounds = String(milisecounds).padStart(2, "00");


    return `${hours}:${minutes}:${secounds}:${milisecounds}`
  }


  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controlls">
        <button onClick={start} className="start-button">
          Start
        </button>
        <button onClick={stop} className="stop-button">
          Stop
        </button>
        <button onClick={reset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch