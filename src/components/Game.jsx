import { useEffect, useState, useRef } from "react";
import "../css/game/Game.css";
import SelectCharactere from "./Game/SelectCharactere";
import Lunch from "./Game/Lunch";

function Game() {
  const [page, setPage] = useState("selectCharactere");
  const [charactere, setCharactere] = useState();
  const [key, setKey] = useState(0);

  const refreshComponent = () => {
    console.log("rejouer");
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="gameContainer">
      {page === "selectCharactere" ? (
        <SelectCharactere
          charactere={charactere}
          setCharactere={setCharactere}
          setPage={setPage}
        />
      ) : (
        <Lunch charactere={charactere} key={key} replay={refreshComponent} />
      )}
    </div>
  );
}

export default Game;
