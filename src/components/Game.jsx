import { useEffect, useState, useRef } from "react";
import "../css/Game.css";
import LifeBar from "./common/LifeBar";
import gifSuperAttack from "../images/attack.gif";

const SECONDS = 10;
const choices = ["defense", "attack", "superAttack"];

function Game() {
  const [tour, setTour] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(SECONDS);
  const [isPlaying, setIsPlaying] = useState(true);

  const [isShowMessage, setIsShowMessage] = useState(false);
  const messageRef = useRef(null);
  const [message, setMessage] = useState("");

  const [maxLifePoint, setMaxLifePoint] = useState(1000);
  const [currentLifePoint, setCurrentLifePoint] = useState(maxLifePoint);
  const cardRef = useRef(null);
  const [imDead, setImDead] = useState(false);
  const [isAttacked, setIsAttacked] = useState(false);

  const [maxLifePointAd, setMaxLifePointAd] = useState(1000);
  const [currentLifePointAd, setCurrentLifePointAd] = useState(maxLifePointAd);
  const cardAdRef = useRef(null);
  const [isDeadAd, setIsDeadAd] = useState(false);
  const [isAttackedAd, setIsAttackedAd] = useState(false);

  useEffect(() => {
    let timer;
    console.log("timer");
    if (isPlaying) {
      console.log("in if");
      clearInterval(timer);
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer);
            handleTimeout();
            return SECONDS;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      console.log("off timer");
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [tour, isPlaying]);

  const actions = {
    attack: {
      defense: () => degat(50, false),
      attack: () => degat(100, true) && degat(100, false),
      superAttack: () => degat(100, false) && degat(200, true),
    },
    defense: {
      defense: () => console.log("se passe rien"),
      attack: () => degat(50, true),
      superAttack: () => degat(200, false),
    },
    superAttack: {
      defense: () => degat(200, true),
      attack: () => degat(100, true) && degat(200, false),
      superAttack: () => degat(200, true) && degat(200, false),
    },
  };

  const handleClickAction = (choice) => {
    const choiceAdversaire = randomChoice();
    // console.log(
    //   `Vous avez fait une (${choice}) et l'adversaire une (${choiceAdversaire}).`
    // );
    setMessage(
      `Vous avez fait une (${choice}) et l'adversaire une (${choiceAdversaire}).`
    );
    setIsShowMessage(true);
    setTimeout(() => setIsShowMessage(false), 2000);
    actions[choice][choiceAdversaire]();
    isDead();
  };

  const randomChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const degat = (pourcentage, isMe) => {
    let value = isMe
      ? Math.floor(currentLifePoint - pourcentage)
      : Math.floor(currentLifePointAd - pourcentage);
    if (value <= 0) {
      value = 0;
    }
    console.log("value", value);
    console.log("currentLifePoint", currentLifePoint);
    console.log("currentLifePointAd", currentLifePointAd);
    isMe
      ? setCurrentLifePoint((previousValue) =>
          previousValue !== value ? value : previousValue
        )
      : setCurrentLifePointAd((previousValue) =>
          previousValue !== value ? value : previousValue
        );
    animateCard(isMe ? cardRef : cardAdRef);
  };

  const animateCard = (ref) => {
    ref.current.classList.add("animate");
    ref.current.addEventListener(
      "animationend",
      () => ref.current.classList.remove("animate"),
      { once: true }
    );
  };

  const isDead = () => {
    // console.log("currentLifePoint", currentLifePoint);
    // console.log("currentLifePointAd", currentLifePointAd);
    if (currentLifePoint <= 0 && currentLifePointAd <= 0) {
      console.log(`Egalité`);
      setIsDeadAd(true);
      setImDead(true);
      setIsPlaying(false);
    } else if (currentLifePoint <= 0) {
      console.log(`Vous êtes mort`);
      setImDead(true);
      setIsPlaying(false);
    } else if (currentLifePointAd <= 0) {
      console.log(`Adversaire mort`);
      setIsDeadAd(true);
    } else {
      setTour((prevKey) => prevKey + 1);
      setTimeRemaining(SECONDS);
      return;
    }

    setIsPlaying(false);
  };

  const handleTimeout = () => {
    console.log("Temps écoulé, sélectionnez à nouveau.");
    setMessage(`Votre tour est passé et l'adversaire vous a attaqué.`);
    setIsShowMessage(true);
    setTimeout(() => setIsShowMessage(false), 2000);
    degat(50, true);
    isDead();
  };

  return (
    <div className="gameContainer">
      {/* <div className=""></div> */}
      <div className="game">
        <div className="header">
          <div className="top">
            <div>stat</div>
            <div>Temps restant : {timeRemaining} secondes</div>
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
            <div className="card" ref={cardRef}>
              <div className="containerAnimation">
                {isAttacked ?? (
                  <img
                    src={gifSuperAttack}
                    alt="gifSuperAttack"
                    onAnimationEnd={() => setIsAttacked(false)}
                  />
                )}
              </div>
            </div>
            <LifeBar currentLife={currentLifePoint} maxLife={maxLifePoint} />
          </div>
          <div className="adversairePart">
            <div className="card" ref={cardAdRef}>
              <div className="containerAnimation">
                {isAttackedAd ?? (
                  <img
                    src={gifSuperAttack}
                    alt="gifSuperAttack"
                    onAnimationEnd={() => setIsAttackedAd(false)}
                  />
                )}
              </div>
            </div>
            <LifeBar
              currentLife={currentLifePointAd}
              maxLife={maxLifePointAd}
            />
          </div>
        </div>
        <div className="footer">
          {choices.map((choice) => (
            <button
              disabled={!isPlaying}
              key={choice}
              onClick={() => {
                handleClickAction(choice);
              }}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
