import { useState, useEffect } from "react";

function Timer({ seconds, onTimeout, onStopTimer }) {
  const [timeRemaining, setTimeRemaining] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeout]);

  return <div>Temps restant : {timeRemaining} secondes</div>;
}

export default Timer;
