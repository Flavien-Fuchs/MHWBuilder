import React from "react";
import "../../css/game/SelectCharactere.css";
import { characteres } from "../../assets/data/Characteres";
import SelectCard from "../../components/common/SelectCard";
import { useState } from "react";

function SelectCharactere({ charactere, setCharactere, setPage }) {
  //   const handleCard = (value) => {
  //     setCharactere(value);
  //   };
  const handleCard = (value) => {
    setCharactere(value);
    setPage("lunch");
  };
  return (
    <>
      {/* {charactere && (
        <div className="modal">
          <div className="" onClick={() => setCharactere()}>
            x
          </div>
          <div className="afficheChara">
            <figure>
              <img src={`${charactere.path}`} alt={charactere.name} />
            </figure>
            <div className="info">
              <h3 className="name">{charactere.name}</h3>
              <div className="">{charactere.descrip}</div>
            </div>
          </div>
        </div>
      )} */}
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
