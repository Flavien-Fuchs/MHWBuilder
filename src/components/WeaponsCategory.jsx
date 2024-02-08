import "../css/Items.css";
import PropTypes from "prop-types";

function WeaponsCategory({ handleChoiseType, weaponType, name }) {
  return (
    <div className="weaponType" onClick={handleChoiseType}>
      <img
        src={`./src/images/ArmorsIcons/${weaponType}.png`}
        alt={weaponType}
      />
      {name}
    </div>
  );
}
WeaponsCategory.propTypes = {
  handleChoiseType: PropTypes.func.isRequired,
  weaponType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default WeaponsCategory;
