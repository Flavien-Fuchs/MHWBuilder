/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Items.css";

function Weapons({ weapons, handleWeapon, closePage }) {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState(null);

  const handleChoiseType = (type) => {
    setWeaponType(type);
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
          <div className="item" onClick={() => handleChoiseType("great-sword")}>
            Great Sword
          </div>
          <div
            className="item"
            onClick={() => handleChoiseType("sword-and-shield")}
          >
            Sword & Shield
          </div>
          <div className="item" onClick={() => handleChoiseType("dual-blades")}>
            Dual Blades
          </div>
          <div className="item" onClick={() => handleChoiseType("long-sword")}>
            Long Sword
          </div>
          <div className="item" onClick={() => handleChoiseType("hammer")}>
            Hammer
          </div>
          <div
            className="item"
            onClick={() => handleChoiseType("hunting-horn")}
          >
            Hunting Horn
          </div>
          <div className="item" onClick={() => handleChoiseType("lance")}>
            Lance
          </div>
          <div className="item" onClick={() => handleChoiseType("gunlance")}>
            Gunlance
          </div>
          <div className="item" onClick={() => handleChoiseType("switch-axe")}>
            Switch Axe
          </div>
          <div
            className="item"
            onClick={() => handleChoiseType("charge-blade")}
          >
            Charge Blade
          </div>
          <div
            className="item"
            onClick={() => handleChoiseType("insect-glaive")}
          >
            Insect Glaive
          </div>
          <div className="item" onClick={() => handleChoiseType("bow")}>
            Bow
          </div>
          <div
            className="item"
            onClick={() => handleChoiseType("light-bowgun")}
          >
            Light Bowgun
          </div>
          <div
            className="item"
            onClick={() => handleChoiseType("heavy-bowgun")}
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
          {weapons
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
                <p>Affinity : {weapon.attributes.affinity ? (`${weapon.attributes.affinity}%`) : ("0%")}</p>
                {weapon.durability && <div className="sharpnessContainer">
                  <p>Sharpness : </p>
                  <div className="sharpness red" style={{ "width": `${weapon.durability[0].red / 3}px` }}></div>
                  <div className="sharpness orange" style={{ "width": `${weapon.durability[0].orange / 3}px` }}></div>
                  <div className="sharpness yellow" style={{ "width": `${weapon.durability[0].yellow / 3}px` }}></div>
                  <div className="sharpness green" style={{ "width": `${weapon.durability[0].green / 3}px` }}></div>
                  <div className="sharpness blue" style={{ "width": `${weapon.durability[0].blue / 3}px` }}></div>
                  <div className="sharpness white" style={{ "width": `${weapon.durability[0].white / 3}px` }}></div>
                  <div className="sharpness purple" style={{ "width": `${weapon.durability[0].purple / 3}px` }}></div>
                </div>}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Weapons;
