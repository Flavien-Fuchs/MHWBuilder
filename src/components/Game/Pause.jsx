import React from "react";
import "../../css/game/Pause.css";

function Pause({ setIsPlaying, setViewOverlay, redirectToBuilder }) {
  return (
    <div className="containerPause">
      <h1 className="title">Pause</h1>
      <div className="containerBtn">
        <div
          className="btnReturn btn"
          onClick={() => {
            setIsPlaying(true);
            setViewOverlay("");
          }}
        >
          return
        </div>
        <div className="btnExit btn" onClick={redirectToBuilder}>
          Exit
        </div>
      </div>
    </div>
  );
}

export default Pause;
