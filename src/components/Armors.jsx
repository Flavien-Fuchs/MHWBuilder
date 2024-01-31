/* eslint-disable react/prop-types */
import "../css/Items.css";
/* import ItemArmor from './ItemArmor'; */

function Armors({ armors, handleArmor, type, closePage }) {
  let newArmors = [];
  armors.data.map((item) => {
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
              <div className="globalInfos">
                <p className="paragrapheList">{armor.name}</p>
                <p className="rarity">Rarity {armor.rarity}</p>
                {!armor.assets ? (
                  <img src="./src/images/nullArmor.png" alt="armor" />
                ) : armor.assets.imageMale ? (
                  <img src={armor.assets.imageMale} alt="armor" />
                ) : (
                  <img src={armor.assets.imageFemale} alt="armor" />
                )}
                <p className="stats">
                  Defense : base {armor.defense.base} | max{armor.defense.max} |
                  augmented {armor.defense.augmented}
                </p>
              </div>
              <div className="detailsInfos">
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
                    <img
                      src="./src/images/icons/dragon-icon.png"
                      alt="dragon"
                    />
                    Dragon Resist : {armor.resistances.dragon}
                  </li>
                </ul>
                {armor.skills && armor.skills.length > 0 ? (
                  <div>
                    <p className="skillsList">skills list</p>
                    <ul className="hideSkills">
                      {armor.skills.map((skill, key) => (
                        <li key={key}>
                          {skill.skillName} - {skill.level}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Armors;
