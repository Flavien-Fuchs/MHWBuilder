/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import "../../css/game/Lunch.css";
import LifeBar from "../../components/common/LifeBar";
import Pause from "./Pause";
import Stat from "./Stat";
import Result from "./Result";

const SECONDS = 10;
const choices = ["defense", "attack", "superAttack"];
const MULTIPLICATEURFINALE = 5;
const MULTIPLICATIONAD = 10;
const MULTIPLICATEURFINALEAD = 30;

function Lunch({ charactere, replay, redirectToBuilder, myState, monster }) {
  const [tour, setTour] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(SECONDS);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewOverlay, setViewOverlay] = useState("");

  const [maxLifePoint, setMaxLifePoint] = useState(myState.health);
  const [currentLifePoint, setCurrentLifePoint] = useState(maxLifePoint);
  const cardRef = useRef(null);
  const [imDead, setImDead] = useState(false);
  const [isAttacked, setIsAttacked] = useState(false);

  const [maxLifePointAd, setMaxLifePointAd] = useState(monster.state.health);
  const [currentLifePointAd, setCurrentLifePointAd] = useState(maxLifePointAd);
  const cardAdRef = useRef(null);
  const [isDeadAd, setIsDeadAd] = useState(false);
  const [isAttackedAd, setIsAttackedAd] = useState(false);
  const [actionAd, setActionAd] = useState("");

  useEffect(() => {
    let timer;
    if (isPlaying) {
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
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [tour, isPlaying]);

  const actions = {
    attack: {
      defense: () => {
        degat("low", false);
      },
      attack: () => {
        degat("normal", true);
        degat("normal", false);
      },
      superAttack: () => {
        degat("normal", false);
        degat("critical", true);
      },
    },
    defense: {
      defense: () => {},
      attack: () => {
        degat("low", true);
      },
      superAttack: () => {
        degat("critical", false);
      },
    },
    superAttack: {
      defense: () => {
        degat("critical", true);
      },
      attack: () => {
        degat("normal", true);
        degat("critical", false);
      },
      superAttack: () => {
        degat("critical", true);
        degat("critical", false);
      },
    },
  };

  const handleClickAction = (choice) => {
    const choiceAdversaire = randomChoice();
    setActionAd(choiceAdversaire);
    setTimeout(() => {
      setActionAd("");
    }, 2000);
    actions[choice][choiceAdversaire]();
    isDead();
  };

  const randomChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const degat = (attack, isMe) => {
    let dommmage = 0;
    const types = ["fire", "water", "ice", "thunder", "dragon"];
    if (isMe === true) {
      let elementDamageAd = 0;
      let type = "";
      let myResistanceElementale = 0;
      if (monster.state.elementalAttack) {
        elementDamageAd = monster.state.elementalAttack[0].damage;
        type = monster.state.elementalAttack[0].type;
        if (types.includes(type)) {
          type = type.charAt(0).toUpperCase() + type.slice(1);
          let resitanteName = `res${type}`;
          myResistanceElementale = myState[resitanteName];
        }
      }
      dommmage =
        ((monster.state.attack / MULTIPLICATIONAD) *
          (100 / (100 + myState.augDefense)) +
          (elementDamageAd -
            (elementDamageAd * myResistanceElementale * 10) / 100)) /
        MULTIPLICATEURFINALEAD;
    } else {
      let myElementDamage = 0;
      let type = "";
      let resistanceElementaleAd = 0;
      if (myState.elementalAttack.length > 0) {
        myElementDamage = myState.elementalAttack[0].damage;
        type = myState.elementalAttack[0].type;
        if (types.includes(type)) {
          type = type.charAt(0).toUpperCase() + type.slice(1);
          let resitanteName = `res${type}`;
          resistanceElementaleAd = monster.state[resitanteName];
        }
      }
      dommmage =
        ((myState.attack / myState.multipli) *
          (100 / (100 + monster.state.augDefense)) +
          (myElementDamage -
            (myElementDamage * resistanceElementaleAd * 10) / 100)) *
        MULTIPLICATEURFINALE;
    }

    dommmage =
      attack === "low"
        ? dommmage / 2
        : attack === "normal"
        ? dommmage
        : dommmage * 2;
    dommmage = Math.round(dommmage);
    const life = isMe
      ? currentLifePoint - dommmage
      : currentLifePointAd - dommmage;

    const containerAnimationClassList = isMe
      ? cardRef.current?.querySelector(".containerAnimation")?.classList
      : cardAdRef.current?.querySelector(".containerAnimation")?.classList;

    if (containerAnimationClassList) {
      containerAnimationClassList.add(`${attack}Attack`);
    }

    const updateLifePointFunction = isMe
      ? setCurrentLifePoint
      : setCurrentLifePointAd;
    const cardRefToUpdate = isMe ? cardRef : cardAdRef;

    updateLifePointFunction(life);
    animateCard(cardRefToUpdate);

    setTimeout(() => {
      containerAnimationClassList?.remove(`${attack}Attack`);
    }, 500);
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
    if (currentLifePoint <= 0 && currentLifePointAd <= 0) {
      setIsDeadAd(true);
      setImDead(true);
      setIsPlaying(false);
    } else if (currentLifePoint <= 0) {
      setImDead(true);
      setIsPlaying(false);
    } else if (currentLifePointAd <= 0) {
      setIsDeadAd(true);
    } else {
      setTour((prevKey) => prevKey + 1);
      setTimeRemaining(SECONDS);
      return;
    }

    setIsPlaying(false);
  };

  const handleTimeout = () => {
    setActionAd("attack");
    setTimeout(() => {
      setActionAd("");
    }, 2000);
    degat("low", true);
    isDead();
  };
  const triche = () => {
    setCurrentLifePointAd(0);
    isDead();
  };
  return (
    <div className="gameContainer">
      {!isPlaying && (
        <div className="viewOverlay">
          {viewOverlay === "Pause" ? (
            <Pause
              setIsPlaying={setIsPlaying}
              setViewOverlay={setViewOverlay}
              redirectToBuilder={redirectToBuilder}
            />
          ) : viewOverlay === "Stat" ? (
            <Stat setIsPlaying={setIsPlaying} setViewOverlay={setViewOverlay} />
          ) : (
            <Result
              setIsPlaying={setIsPlaying}
              setViewOverlay={setViewOverlay}
              charactere={charactere}
              imDead={imDead}
              replay={replay}
              redirectToBuilder={redirectToBuilder}
            />
          )}
        </div>
      )}
      <div className="game">
        <div className="header">
          <div className="top">
            <div onClick={triche}>{tour}</div>
            <div>Time remaining: {timeRemaining} seconds</div>
            <div
              onClick={() => {
                setIsPlaying(false);
                setViewOverlay("Pause");
              }}
            >
              pause
            </div>
          </div>
        </div>
        <div className="body">
          <div className="myPart">
            <div className="card" ref={cardRef}>
              <figure>
                <img
                  className={`charactere ${imDead && "dead"}`}
                  src={charactere.path_cover}
                  alt={charactere.name}
                />
              </figure>
              <div className="containerAnimation"></div>
            </div>
            <LifeBar currentLife={currentLifePoint} maxLife={maxLifePoint} />
          </div>
          <div className="adversairePart">
            <div className="card" ref={cardAdRef}>
              <figure>
                <img
                  className={`charactere ${isDeadAd && "dead"}`}
                  src={monster.path}
                  alt="Tigrex"
                />
              </figure>
              <div className="containerAnimation"></div>
            </div>
            <LifeBar
              currentLife={currentLifePointAd}
              maxLife={maxLifePointAd}
            />
            <div className="actionText">{actionAd}</div>
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

export default Lunch;
