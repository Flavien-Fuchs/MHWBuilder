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
          <div className="itemWeapons">
          <div className="item greatSword" onClick={() => handleChoiseType("great-sword")}>
            <img src='src\assets\WeaponsIcons\great-sword.png'/>
            <p>Great Sword</p>
          </div>
          <div
            className="item swordAndShield"
            onClick={() => handleChoiseType("sword-and-shield")}
          > <img src='src\assets\WeaponsIcons\sword-and-shield.png'/>
            <p>Sword & Shield</p>
          </div>
          <div className="item dualBlades" onClick={() => handleChoiseType("dual-blades")}>
            <img src='src\assets\WeaponsIcons\dual-blades.png'/>
            <p>Dual Blades</p>
          </div>
          <div className="item longSword" onClick={() => handleChoiseType("long-sword")}>
            <img src='src\assets\WeaponsIcons\long-sword.png'/>
            <p>Long Sword</p>
          </div>
          <div className="item hammer" onClick={() => handleChoiseType("hammer")}>
            <img src='src\assets\WeaponsIcons\hammer.png'/>
            <p>Hammer</p>
          </div>
          <div
            className="item huntingHorn"
            onClick={() => handleChoiseType("hunting-horn")}
          > <img src="src\assets\WeaponsIcons\hunting-horn.png"/>
            <p>Hunting Horn</p>
          </div>
          <div className="item lance" onClick={() => handleChoiseType("lance")}>
            <img src='src\assets\WeaponsIcons\lance.png'/>
            <p>Lance</p>
          </div>
          <div className="item gunlance" onClick={() => handleChoiseType("gunlance")}>
            <img src="src\assets\WeaponsIcons\gunlance.png"/>
            <p>Gunlance</p>
          </div>
          <div className="item switchAxe" onClick={() => handleChoiseType("switch-axe")}>
            <img src="src\assets\WeaponsIcons\switch-axe.png"/>
            <p>Switch Axe</p>
          </div>
          <div
            className="item chargeBlade"
            onClick={() => handleChoiseType("charge-blade")}
          >
            <img src='src\assets\WeaponsIcons\charge-blade.png'/>
            <p>Charge Blade</p>
          </div>
          <div
            className="item insectGlaive"
            onClick={() => handleChoiseType("insect-glaive")}
          > 
            <img src="src\assets\WeaponsIcons\insect-glaive.png"/>
            <p>Insect Glaive</p>
          </div>
          <div className="item bow" onClick={() => handleChoiseType("bow")}>
            <img src="src\assets\WeaponsIcons\bow.png"/>
            <p>Bow</p>
          </div>
          <div
            className="item lightBowgun"
            onClick={() => handleChoiseType("light-bowgun")}
          >
            <img src='src\assets\WeaponsIcons\light-bowgun.png'/>
            <p>Light Bowgun</p>
          </div>
          <div
            className="item heavyBowgun"
            onClick={() => handleChoiseType("heavy-bowgun")}
          >
            <img src='src\assets\WeaponsIcons\heavy-bowgun.png'/>
            <p>Heavy Bowgun</p>
          </div>
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
