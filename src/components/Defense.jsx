import PropTypes from "prop-types";
import "../css/Stats.css";

function Defense({
  health,
  stamina,
  baseDefense,
  maxDefense,
  augDefense,
  resFire,
  resWater,
  resIce,
  resThunder,
  resDragon,
}) {
  return (
    <div className="statsCard">
      <h3>Defensives stats</h3>
      <div className="bgOn">
        <span>
          <img
            className="icon"
            src="./src/images/icons/health-icon.png"
            alt="fire"
          />
          Health :
        </span>{" "}
        <span>{health}</span>
      </div>
      <div>
        <span>
          <img
            className="icon"
            src="./src/images/icons/stamina-icon.png"
            alt="fire"
          />
          Stamina :
        </span>{" "}
        <span>{stamina}</span>
      </div>
      <div className="bgOn">
        <span>
          <img
            className="icon"
            src="./src/images/icons/defense-icon.png"
            alt="fire"
          />
          Defense :{" "}
        </span>{" "}
        <span>
          {baseDefense}, {maxDefense}, {augDefense}
        </span>
      </div>
      <div>
        <span>
          <img
            className="icon"
            src="./src/images/icons/fire-icon.png"
            alt="fire"
          />
          Fire Resist :
        </span>{" "}
        <span>{resFire}</span>
      </div>
      <div className="bgOn">
        <span>
          <img
            className="icon"
            src="./src/images/icons/water-icon.png"
            alt="water"
          />
          Water Resist :
        </span>{" "}
        <span>{resWater}</span>
      </div>
      <div>
        <span>
          <img
            className="icon"
            src="./src/images/icons/ice-icon.png"
            alt="ice"
          />
          Ice Resist :
        </span>{" "}
        <span>{resIce}</span>
      </div>
      <div className="bgOn">
        <span>
          <img
            className="icon"
            src="./src/images/icons/thunder-icon.png"
            alt="thunder"
          />
          Thunder Resist :
        </span>{" "}
        <span>{resThunder}</span>
      </div>
      <div>
        <span>
          <img
            className="icon"
            src="./src/images/icons/dragon-icon.png"
            alt="dragon"
          />
          Dragon Resist :
        </span>{" "}
        <span>{resDragon}</span>
      </div>
    </div>
  );
}

Defense.propTypes = {
  health: PropTypes.number.isRequired,
  stamina: PropTypes.number.isRequired,
  baseDefense: PropTypes.number.isRequired,
  maxDefense: PropTypes.number.isRequired,
  augDefense: PropTypes.number.isRequired,
  resFire: PropTypes.number.isRequired,
  resWater: PropTypes.number.isRequired,
  resIce: PropTypes.number.isRequired,
  resThunder: PropTypes.number.isRequired,
  resDragon: PropTypes.number.isRequired,
};

export default Defense;
