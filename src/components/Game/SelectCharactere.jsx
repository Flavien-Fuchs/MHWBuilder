import React from "react";
import "../../css/game/SelectCharactere.css";
import { characteres } from "../../assets/data/Characteres";
import SelectCard from "../../components/common/SelectCard";

function SelectCharactere({  setCharactere, setPage }) {
  const handleCard = (value) => {
    setCharactere(value);
    setPage("lunch");
  };
  return (
    <>
      <div className="pageSelectCharaContainer">
        <h2>Avatar Selection</h2>
        <div className="selectCharaContainer">
          {characteres.map((charactere) => (
            <SelectCard
              key={charactere.id}
              charactere={charactere}
              setCharactere={handleCard}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectCharactere;
