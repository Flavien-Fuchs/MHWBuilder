import React, { useEffect, useState, useRef } from "react";
import "../../css/common/LifeBar.css";


function LifeBar({ currentLife, maxLife }) {
  const [currentLifePoint, setCurrentLifePoint] = useState(
    (currentLife / maxLife) * 100
  );
  const progressBarRef = useRef(null);

  useEffect(() => {
    const value = Math.floor((currentLife / maxLife) * 100);
    setCurrentLifePoint(value);
    changeStyle(value);
  }, [currentLife, maxLife]);

  const changeStyle = (value) => {
    if (!progressBarRef.current) return;

    let color;
    if (value > 60) {
      color = "green";
    } else if (value > 30) {
      color = "#C38E00";
    } else {
      color = "red";
    }

    progressBarRef.current.style.backgroundColor = color;
    progressBarRef.current.classList.add("animate");

    progressBarRef.current.addEventListener(
      "animationend",
      () => progressBarRef.current.classList.remove("animate"),
      { once: true }
    );
  };

  return (
    <div className="range">
      <div
        className="life"
        style={{ width: `${currentLifePoint}%` }}
        ref={progressBarRef}
      >
        {/* {currentLifePoint}% */}{currentLife}
      </div>
    </div>
  );
}

export default LifeBar;