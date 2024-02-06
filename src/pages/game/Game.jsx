import { useEffect, useState, useRef } from "react";
import "../../assets/css/pages/game/Game.css";
import SelectCharactere from "./SelectCharactere";
import Lunch from "./Lunch";

function Game() {
  const [page, setPage] = useState("selectCharactere");
  const [charactere, setCharactere] = useState();

  return (
    <div className="gameContainer">
      {page === "selectCharactere" ? (
        <SelectCharactere
          charactere={charactere}
          setCharactere={setCharactere}
          setPage={setPage}
        />
      ) : (
        <Lunch charactere={charactere} />
      )}
    </div>
  );
}

export default Game;
