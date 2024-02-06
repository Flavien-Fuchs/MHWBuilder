import React from "react";
import "../../../assets/css/common/SelectCard.css";
function SelectCard({ charactere, setCharactere }) {
  return (
    <div
      className="selectCardContainer"
      onClick={() => setCharactere(charactere)}
    >
      <figure>
        <img src={`${charactere.path_cover}`} alt={charactere.name} />
      </figure>
      <div className="name">{charactere.name}</div>
    </div>
  );
}

export default SelectCard;
