import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import "../css/Game.css";
import Timer from "./common/Timer";
import LifeBar from "./common/LifeBar";

function Game() {
  const [tour, setTour] = useState(0);
  const [isShowMessage, setIsShowMessage] = useState(false);
  const messageRef = useRef(null);
  const [message, setMessage] = useState("");

  const [maxLifePoint, setMaxLifePoint] = useState(1000);
  const [currentLifePoint, setCurrentLifePoint] = useState(maxLifePoint);
  const cardRef = useRef(null);

  const [maxLifePointAd, setMaxLifePointAd] = useState(1000);
  const [currentLifePointAd, setCurrentLifePointAd] = useState(maxLifePointAd);
  const cardAdRef = useRef(null);

  // const [choices, setChoices] = useState([]);
  const choices = ["defense", "attack", "superAttack"];

  const SECONDS = 10;

  const actions = {
    attack: {
      defense: () => degat(50, false),
      attack: () => {
        degat(100, true), degat(100, false);
      },
      superAttack: () => {
        degat(100, false), degat(200, true);
      },
    },
    defense: {
      defense: () => console.log("se passe rien"),
      attack: () => degat(50, true),
      superAttack: () => degat(200, false),
    },
    superAttack: {
      defense: () => degat(200, true),
      attack: () => {
        degat(100, true), degat(200, false);
      },
      superAttack: () => {
        degat(200, true), degat(200, false);
      },
    },
  };

  // useEffect(() => {
  //   const value = Object.keys(actions);
  //   setChoices(value);
  // }, []);

  const handleClickAction = (choice) => {
    const choiceAdversaire = randomChoice();
    console.log(
      `Vous avez fait une (${choice}) et l'adversaire une (${choiceAdversaire}).`
    );
    setMessage(
      `Vous avez fait une (${choice}) et l'adversaire une (${choiceAdversaire}).`
    );
    setIsShowMessage(true);
    setTimeout(() => setIsShowMessage(false), 2000);
    actions[choice][choiceAdversaire]();
    verificationDead();
    setTour((prevKey) => prevKey + 1);
  };

  const randomChoice = () => {
    const indexAleatoire = Math.floor(Math.random() * choices.length);
    const result = choices[indexAleatoire];
    return result;
  };

  // heal
  const degat = (pourcentage, isMe) => {
    if (isMe) {
      // calcule pourcentage par rapport a l'arme de lenemie
      // ....
      // Fin
      const value = currentLifePoint - pourcentage;
      setCurrentLifePoint(value);
      cardRef.current.classList.add("animate");
      cardRef.current.addEventListener(
        "animationend",
        () => cardRef.current.classList.remove("animate"),
        { once: true }
      );
    } else {
      // calcule pourcentage par rapport a mon arme l'arme
      // ....
      // Fin
      const value = currentLifePointAd - pourcentage;
      setCurrentLifePointAd(value);
      cardAdRef.current.classList.add("animate");

      cardAdRef.current.addEventListener(
        "animationend",
        () => cardAdRef.current.classList.remove("animate"),
        { once: true }
      );
    }
  };

  const verificationDead = () => {
    if (currentLifePoint <= 0 && currentLifePointAd <= 0) {
      console.log(`Egalité`);
      handleStopTimer();
    }
    if (currentLifePoint <= 0) {
      console.log(`Vous etes mort`);
      handleStopTimer();
    }
    if (currentLifePointAd <= 0) {
      console.log(`Adversaire mort`);
      handleStopTimer();
    }
  };

  const handleTimeout = () => {
    console.log("Temps écoulé, sélectionnez à nouveau.");
    setMessage(`Votre tour est passer et l'adversaire vous a attquer.`);
    setIsShowMessage(true);
    setTimeout(() => setIsShowMessage(false), 2000);
    degat(50, true);
    verificationDead();
    setTour((prevKey) => prevKey + 1);
  };

  const handleStopTimer = () => {
    const isPlaying = true;
    // Exécutez votre logique spécifique ici lorsque le minuteur est arrêté
  };

  return (
    <div className="gameContainer">
      {/* <div className=""></div> */}
      <div className="game">
        <div className="header">
          <div className="top">
            <div>stat</div>
            <div>
              <Timer
                key={tour}
                seconds={SECONDS}
                onTimeout={handleTimeout}
                onStopTimer={handleStopTimer}
              />
            </div>
            <div>menu</div>
          </div>
          <div className="bottom">Tour {tour}</div>
        </div>
        <div className="body">
          {isShowMessage && (
            <div className="message">
              <div ref={messageRef}>{message}</div>
            </div>
          )}

          <div className="myPart">
            <div className="card" ref={cardRef}></div>
            <LifeBar currentLife={currentLifePoint} maxLife={maxLifePoint} />
          </div>
          <div className="adversairePart">
            <div className="card" ref={cardAdRef}></div>
            <LifeBar
              currentLife={currentLifePointAd}
              MaxLife={maxLifePointAd}
            />
          </div>
          {/* <div>{`${currentLifePoint}/${maxLifePoint}`}</div>
          <div>{`${currentLifePointAd}/${maxLifePointAd}`}</div> */}
        </div>
        <div className="footer">
          {choices.map((choice) => (
            <div key={choice} onClick={() => handleClickAction(choice)}>
              {choice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Game.propTypes = {
  maxLifePoint: PropTypes.number.isRequired,
  currentLifePoint: PropTypes.number.isRequired,
  maxLifePointAd: PropTypes.number.isRequired,
  currentLifePointAd: PropTypes.number.isRequired,
  choices: PropTypes.array.isRequired,
};

export default Game;
