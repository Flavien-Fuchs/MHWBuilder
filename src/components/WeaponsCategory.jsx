import "../css/Items.css";

// eslint-disable-next-line react/prop-types
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

export default WeaponsCategory;
