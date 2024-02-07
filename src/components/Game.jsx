/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import "../css/game/Game.css";
import SelectCharactere from "./Game/SelectCharactere";
import Lunch from "./Game/Lunch";
import { monsters } from "../assets/data/Monsters";

function Game({
  redirectToBuilder,
  health,
  augDefense,
  resFire,
  resWater,
  resIce,
  resThunder,
  resDragon,
  attack,
  elementalAttack,
}) {
  const [page, setPage] = useState("selectCharactere");
  const [charactere, setCharactere] = useState();
  const [key, setKey] = useState(0);
  const [myState, setMyState] = useState({
    health: health,
    augDefense: augDefense,
    resFire: resFire,
    resWater: resWater,
    resIce: resIce,
    resThunder: resThunder,
    resDragon: resDragon,
    attack: attack,
    elementalAttack: elementalAttack,
  });

  const [monster, setMonster] = useState(null);
  useEffect(() => {
    const value = monsters[Math.floor(Math.random() * monsters.length)];
    setMonster(value);
  }, []);

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
        <Lunch
          charactere={charactere}
          myState={myState}
          key={key}
          replay={refreshComponent}
          redirectToBuilder={redirectToBuilder}
          monster={monster}
        />
      )}
    </div>
  );
}

export default Game;
