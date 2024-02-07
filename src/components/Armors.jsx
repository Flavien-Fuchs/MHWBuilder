/* eslint-disable react/prop-types */

import "../css/Items.css";
import BackToTop from "./BackToTopButton";

function Armors({ armors, handleArmor, type, closePage }) {
  let newArmors = [];
  armors.map((item) => {
    if (item.type === type) newArmors.push(item);
  });

  return (
    <>
      <div className="itemContainer">
        <div className="itemNavBar">
          <button onClick={closePage}>Close Page</button>
        </div>

        {newArmors.map((armor, key) => {
          return (
            <div
              key={key}
              className="item"
              onClick={() => {
                handleArmor(armor, type);
              }}
            >
              <p>
                {armor.id} Armor Name: {armor.name}
              </p>
              <p>Rarity {armor.rarity}</p>
              {!armor.assets ? (
                <img src="./src/images/nullArmor.png" alt="armor" />
              ) : armor.assets.imageMale ? (
                <img src={armor.assets.imageMale} alt="armor" />
              ) : (
                <img src={armor.assets.imageFemale} alt="armor" />
              )}
              <p>
                Defense : base {armor.defense.base} | max{armor.defense.max} |
                augmented {armor.defense.augmented}
              </p>
              <ul className="resistance">
                <li>
                  <img src="./src/images/icons/fire-icon.png" alt="fire" />
                  Fire Resist : {armor.resistances.fire}
                </li>
                <li>
                  <img src="./src/images/icons/water-icon.png" alt="water" />
                  Water Resist : {armor.resistances.water}
                </li>
                <li>
                  <img src="./src/images/icons/ice-icon.png" alt="ice" />
                  Ice Resist : {armor.resistances.ice}
                </li>
                <li>
                  <img
                    src="./src/images/icons/thunder-icon.png"
                    alt="thunder"
                  />
                  Thunder Resist : {armor.resistances.thunder}
                </li>
                <li>
                  <img src="./src/images/icons/dragon-icon.png" alt="dragon" />
                  Dragon Resist : {armor.resistances.dragon}
                </li>
              </ul>
              <p>skills list</p>
              <ul>
                {armor.skills.map((skill, key) => {
                  return (
                    <li key={key}>
                      {skill.skillName} - {skill.level}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <BackToTop />
      </div>
    </>
  );
}

export default Armors;
