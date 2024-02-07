import React from "react";
import "../../css/game/Result.css";

function Result({ setIsPlaying, setViewOverlay, charactere, imDead, replay }) {
  return (
    <div className={`containerResult ${imDead && "dead"}`}>
      <div className="containerPersonnage">
        <img
          className={`charactere ${imDead && "dead"}`}
          src={charactere.path}
          alt={charactere.name}
        />
        <div className={`result  ${imDead && "dead"}`}>
          {imDead ? "dead" : "victory"}
        </div>
      </div>
      <div className="containerBtn">
        <div className="btnExit btn">Exit</div>
        <div
          className="btnReplay btn"
          onClick={() => {
            replay();
          }}
        >
          replay
        </div>
      </div>
    </div>
  );
}

export default Result;
