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
          <button className="buttonClose" onClick={closePage}>
            <img src="src/images/delete.png" alt="button" />
          </button>
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
              <div className="textInfos">
                <p className="paragrapheList">{armor.name}</p>
                <p className="rarity">Rarity {armor.rarity}</p>
              </div>
              <div className="allInfos">
                <span className="imageInfos">
                  {!armor.assets ? (
                    <img src="./src/images/nullArmor.png" alt="armor" />
                  ) : armor.assets.imageMale ? (
                    <img src={armor.assets.imageMale} alt="armor" />
                  ) : (
                    <img src={armor.assets.imageFemale} alt="armor" />
                  )}
                </span>
                <div className="detailsInfos">
                  <p className="stats">
                    <img
                      className="defenseImage"
                      src="./src/images/icons/defense-icon.png"
                      alt="defense"
                    />
                    Defense : base {armor.defense.base} | max{armor.defense.max}{" "}
                    | augmented {armor.defense.augmented}
                  </p>
                  <ul className="resistance">
                    <li>
                      <img src="./src/images/icons/fire-icon.png" alt="fire" />
                      Fire Resist : {armor.resistances.fire}
                    </li>
                    <li>
                      <img
                        src="./src/images/icons/water-icon.png"
                        alt="water"
                      />
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
                </div>
              </div>
              {armor.skills && armor.skills.length > 0 && (
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
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Armors;
