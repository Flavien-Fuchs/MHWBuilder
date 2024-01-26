/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Items.css";

function Weapons({ weapons, handleWeapon, closePage }) {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState(null);

  const handleCHoiseType = (type) => {
    setWeaponType(() => type);
    setTypeChosen(true);
  };

  const backWeapon = () => {
    setTypeChosen(false);
  };

  return (
    <>
      {!typeChosen ? (
        <div className="itemContainer">
          <div className="itemNavBar">
            <button onClick={closePage}>Close Page</button>
            {typeChosen && (
              <button onClick={backWeapon}>Choise weapon&apos;s type</button>
            )}
          </div>
          <div className="item" onClick={() => handleCHoiseType("great-sword")}>
            Great Sword
          </div>
          <div
            className="item"
            onClick={() => handleCHoiseType("sword-and-shield")}
          >
            Sword & Shield
          </div>
          <div className="item" onClick={() => handleCHoiseType("dual-blades")}>
            Dual Blades
          </div>
          <div className="item" onClick={() => handleCHoiseType("long-sword")}>
            Long Sword
          </div>
          <div className="item" onClick={() => handleCHoiseType("hammer")}>
            Hammer
          </div>
          <div
            className="item"
            onClick={() => handleCHoiseType("hunting-horn")}
          >
            Hunting Horn
          </div>
          <div className="item" onClick={() => handleCHoiseType("lance")}>
            Lance
          </div>
          <div className="item" onClick={() => handleCHoiseType("gunlance")}>
            Gunlance
          </div>
          <div className="item" onClick={() => handleCHoiseType("switch-axe")}>
            Switch Axe
          </div>
          <div
            className="item"
            onClick={() => handleCHoiseType("charge-blade")}
          >
            Charge Blade
          </div>
          <div
            className="item"
            onClick={() => handleCHoiseType("insect-glaive")}
          >
            Insect Glaive
          </div>
          <div className="item" onClick={() => handleCHoiseType("bow")}>
            Bow
          </div>
          <div
            className="item"
            onClick={() => handleCHoiseType("light-bowgun")}
          >
            Light Bowgun
          </div>
          <div
            className="item"
            onClick={() => handleCHoiseType("heavy-bowgun")}
          >
            Heavy Bowgun
          </div>
        </div>
      ) : (
        <div className="itemContainer">
          <div className="itemNavBar">
            <button onClick={closePage}>Close Page</button>
            {typeChosen && (
              <button onClick={backWeapon}>Choise weapon&apos;stype</button>
            )}
          </div>
          {weapons.data
            .filter((weapon) => weapon.type === weaponType)
            .map((weapon, key) => (
              <div
                key={key}
                className="item"
                onClick={() => {
                  handleWeapon(weapon);
                }}
              >
                <p>
                  {weapon.id} {weapon.name}
                </p>
                <p>Rarity {weapon.rarity}</p>
                {!weapon.assets ? (
                  <img src="./src/images/nullArmor.png" alt="weapon" />
                ) : weapon.assets.image ? (
                  <img src={weapon.assets.image} alt="weapon" />
                ) : (
                  <img src={weapon.assets.icon} alt="weapon" />
                )}
                <p>Attack : {weapon.attack.display}</p>
                {weapon.elements[0] && (
                  <p>
                    Element : {weapon.elements[0].damage} (
                    {weapon.elements[0].type})
                  </p>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Weapons;
