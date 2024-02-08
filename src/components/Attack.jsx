import PropTypes from "prop-types";
function Attack({
  attack,
  elementalAttack,
  affinity,
  criticalBoost,
  sharpness,
}) {
  return (
    <div className="statsCard">
      <h3>Offensives stats</h3>
      <div className="bgOn">
        <span>Attack :</span> <span>{attack}</span>
      </div>
      <div>
        <span>Element :</span>
        {elementalAttack[0] ? (
          <span>
            {elementalAttack[0].damage} ({elementalAttack[0].type})
          </span>
        ) : (
          <span>0</span>
        )}
      </div>
      <div className="bgOn">
        <span>Affinity :</span> <span>{affinity}</span>
      </div>
      <div>
        <span>Critical Boost :</span> <span>{criticalBoost}</span>
      </div>
      {sharpness.red && (
        <div className="bgOn">
          <span>Sharpness :</span>
          <span className="sharpnessContainer">
            <div
              className="sharpness red"
              style={{ width: `${sharpness.red / 3}px` }}
            ></div>
            <div
              className="sharpness orange"
              style={{ width: `${sharpness.orange / 3}px` }}
            ></div>
            <div
              className="sharpness yellow"
              style={{ width: `${sharpness.yellow / 3}px` }}
            ></div>
            <div
              className="sharpness green"
              style={{ width: `${sharpness.green / 3}px` }}
            ></div>
            <div
              className="sharpness blue"
              style={{ width: `${sharpness.blue / 3}px` }}
            ></div>
            <div
              className="sharpness white"
              style={{ width: `${sharpness.white / 3}px` }}
            ></div>
            <div
              className="sharpness purple"
              style={{ width: `${sharpness.purple / 3}px` }}
            ></div>
          </span>
        </div>
      )}
    </div>
  );
}

Attack.propTypes = {
  attack: PropTypes.number.isRequired,
  elementalAttack: PropTypes.array.isRequired,
  affinity: PropTypes.number.isRequired,
  criticalBoost: PropTypes.number.isRequired,
  sharpness: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};

export default Attack;
