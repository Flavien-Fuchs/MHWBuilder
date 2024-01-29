/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../css/Game.css";

function Game() {
  const [maxLifePoint, setMaxLifePoint] = useState(1000);
  const [currentLifePoint, setCurrentLifePoint] = useState(maxLifePoint);

  const [maxLifePointAd, setMaxLifePointAd] = useState(1000);
  const [currentLifePointAd, setCurrentLifePointAd] = useState(maxLifePointAd);

  const [choices, setChoices] = useState([]);

  const actions = {
    attack: {
      defense: () => {
        degat(50, false);
      },
      attack: () => {
        degat(100, true), degat(100, false);
      },
      superAttack: () => {
        degat(100, false), degat(200, true);
      },
    },
    defense: {
      defense: () => {
        console.log("se passe rien");
      },
      attack: () => {
        degat(50, true);
      },
      superAttack: () => {
        degat(200, false);
      },
    },
    superAttack: {
      defense: () => {
        degat(200, true);
      },
      attack: () => {
        degat(100, true), degat(200, false);
      },
      superAttack: () => {
        degat(200, true), degat(200, false);
      },
    },
  };

  useEffect(() => {
    const value = Object.keys(actions);
    setChoices(value);
  }, []);

  const handleClickAction = (choice) => {
    const choiceAdversaire = randomChoice();
    console.log(
      `mon action (${choice}) celui de l'adversaire (${choiceAdversaire}).`
    );
    getValueChoice(choice, choiceAdversaire);
  };

  const randomChoice = () => {
    const indexAleatoire = Math.floor(Math.random() * choices.length);
    const result = choices[indexAleatoire];
    return result;
  };

  const getValueChoice = (choice, choiceAdversaire) => {
    actions[choice][choiceAdversaire]();
  };

  // heal
  const degat = (pourcentage, isMe) => {
    if (isMe) {
      // calcule pourcentage par rapport a larme de lenemie
      // ....
      // Fin
      const value = currentLifePoint - pourcentage;
      setCurrentLifePoint(value);
    } else {
      // calcule pourcentage par rapport a mon arme larme
      // ....
      // Fin
      const value = currentLifePointAd - pourcentage;
      setCurrentLifePointAd(value);
    }
  };

  return (
    <div className="gameContainer">
      {/* <div className=""></div> */}
      <div className="">
        <div className="header">
          <div>stat</div>
          <div>time</div>
          <div>menu</div>
        </div>
        <div className="body">
          <div>{`${currentLifePoint}/${maxLifePoint}`}</div>
          <div>{`${currentLifePointAd}/${maxLifePointAd}`}</div>
        </div>
        <div className="footer">
          {choices.map((choice) => (
            <div
              key={choice}
              onClick={() => {
                handleClickAction(choice);
              }}
            >
              {choice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
