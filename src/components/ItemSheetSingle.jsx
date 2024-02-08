import PropTypes from "prop-types";
import "../css/Stats.css";

function ItemSheetSingle({
  type,
  head,
  chest,
  gloves,
  waist,
  legs,
  weapon,
  charm,
  setArmorPage,
  setWeaponPage,
  setCharmsPage,
  toggleDisplayItem,
  deleteItem,
}) {
  let actualItem = null;
  switch (type) {
    case "head":
      actualItem = head;
      break;
    case "chest":
      actualItem = chest;
      break;
    case "gloves":
      actualItem = gloves;
      break;
    case "waist":
      actualItem = waist;
      break;
    case "legs":
      actualItem = legs;
      break;
    case "weapon":
      actualItem = weapon;
      break;
    case "charm":
      actualItem = charm;
      break;

    default:
      actualItem = null;
      break;
  }

  return (
    <div className="ItemSheetSingleContainer">
      <div className="ISSButtons">
        <button onClick={() => deleteItem(actualItem, type)}>
          Delete item
        </button>
        {type === "weapon" && (
          <button
            onClick={() => {
              toggleDisplayItem(null);
              setWeaponPage(true);
            }}
          >
            Change item
          </button>
        )}
        {type === "charm" && (
          <button
            onClick={() => {
              toggleDisplayItem(null);
              setCharmsPage(type);
            }}
          >
            Change item
          </button>
        )}
        {type !== "charm" && type !== "weapon" && (
          <button
            onClick={() => {
              toggleDisplayItem(null);
              setArmorPage(type);
            }}
          >
            Change item
          </button>
        )}
        <button
          className="ISSingleClose"
          onClick={() => toggleDisplayItem(null)}
        >
          Back
        </button>
      </div>
      <div className="ISSView">
        <h3>{actualItem.name}</h3>
        {actualItem.rarity ? (
          <p>Rarity {actualItem.rarity}</p>
        ) : (
          <p>Rarity {actualItem.ranks[actualItem.ranks.length - 1].rarity} </p>
        )}
        {type === "weapon" ? (
          <div className="ISSDescription">
            {!actualItem.assets ? (
              <img src="./src/images/nullArmor.png" alt="weapon" />
            ) : actualItem.assets.image ? (
              <img src={weapon.assets.image} alt="weapon" />
            ) : (
              <img src={weapon.assets.icon} alt="weapon" />
            )}
            <div className="ISSStats">
              <ul className="resistance">
                <li>Attack : {actualItem.attack.display}</li>
                {actualItem.elements[0] ? (
                  <li>
                    Element : {actualItem.elements[0].damage} (
                    {actualItem.elements[0].type})
                  </li>
                ) : (
                  <li>Element : 0</li>
                )}
                {actualItem.attributes.affinity ? (
                  <li>Affinity : {actualItem.attributes.affinity}%</li>
                ) : (
                  <li>Affinity : 0%</li>
                )}
                {actualItem.durability && (
                  <div>
                    <li>Sharpness :</li>
                    <div className="sharpnessContainer">
                      <div
                        className="sharpness red"
                        style={{
                          width: `${actualItem.durability[0].red / 3}px`,
                        }}
                      ></div>
                      <div
                        className="sharpness orange"
                        style={{
                          width: `${actualItem.durability[0].orange / 3}px`,
                        }}
                      ></div>
                      <div
                        className="sharpness yellow"
                        style={{
                          width: `${actualItem.durability[0].yellow / 3}px`,
                        }}
                      ></div>
                      <div
                        className="sharpness green"
                        style={{
                          width: `${actualItem.durability[0].green / 3}px`,
                        }}
                      ></div>
                      <div
                        className="sharpness blue"
                        style={{
                          width: `${actualItem.durability[0].blue / 3}px`,
                        }}
                      ></div>
                      <div
                        className="sharpness white"
                        style={{
                          width: `${actualItem.durability[0].white / 3}px`,
                        }}
                      ></div>
                      <div
                        className="sharpness purple"
                        style={{
                          width: `${actualItem.durability[0].purple / 3}px`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : type === "charm" ? (
          <div className="ISSDescription">
            <div className="ISSSkillsList">
              <img
                className="ISSImgCharm"
                src="./src/images/charm-icon.png"
                alt="armor"
              />
              <p>Skills list</p>
              <ul>
                {actualItem.ranks[actualItem.ranks.length - 1].skills.map(
                  (skill, key) => {
                    return (
                      <li key={key}>
                        {skill.skillName} - {skill.level}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className="ISSDescription">
            {!actualItem.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : actualItem.assets.imageMale ? (
              <img src={actualItem.assets.imageMale} alt="armor" />
            ) : (
              <img src={actualItem.assets.imageFemale} alt="armor" />
            )}
            <div className="ISSStats">
              <ul className="resistance">
                <li>
                  <img
                    src="./src/images/icons/defense-icon.png"
                    alt="defense"
                  />
                  Defense : ({actualItem.defense.base}) (
                  {actualItem.defense.max}) ({actualItem.defense.augmented})
                </li>
                <li>
                  <img src="./src/images/icons/fire-icon.png" alt="fire" />
                  Fire Resist : {actualItem.resistances.fire}
                </li>
                <li>
                  <img src="./src/images/icons/water-icon.png" alt="water" />
                  Water Resist : {actualItem.resistances.water}
                </li>
                <li>
                  <img src="./src/images/icons/ice-icon.png" alt="ice" />
                  Ice Resist : {actualItem.resistances.ice}
                </li>
                <li>
                  <img
                    src="./src/images/icons/thunder-icon.png"
                    alt="thunder"
                  />
                  Thunder Resist : {actualItem.resistances.thunder}
                </li>
                <li>
                  <img src="./src/images/icons/dragon-icon.png" alt="dragon" />
                  Dragon Resist : {actualItem.resistances.dragon}
                </li>
              </ul>

              {actualItem.skills.length > 0 && (
                <div className="ISSSkillsList">
                  <p>Skills list</p>
                  <ul>
                    {actualItem.skills.map((skill, key) => {
                      return (
                        <li key={key}>
                          {skill.skillName} - {skill.level}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

ItemSheetSingle.propTypes = {
  type: PropTypes.string.isRequired,
  head: PropTypes.object,
  chest: PropTypes.object,
  gloves: PropTypes.object,
  waist: PropTypes.object,
  legs: PropTypes.object,
  weapon: PropTypes.object,
  charm: PropTypes.object,
  setArmorPage: PropTypes.func.isRequired,
  setWeaponPage: PropTypes.func.isRequired,
  setCharmsPage: PropTypes.func.isRequired,
  toggleDisplayItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ItemSheetSingle;
