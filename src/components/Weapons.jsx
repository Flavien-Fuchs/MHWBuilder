import PropTypes from "prop-types";
import { useState } from "react";
import "../css/Items.css";
import { ImCross } from "react-icons/im";
import WeaponsCategory from "./WeaponsCategory";

function Weapons({ weapons, handleWeapon, closePage }) {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState("");
  const [searchTerm, setSearchterm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filterByType, setfilterByType] = useState("");

  const handlefilterByType = (event) => setfilterByType(event.target.value);
  const handleSelectOption = (event) => setSelectedOption(event.target.value);
  const handleSearchTerm = (event) => setSearchterm(event.target.value);
  const handleChoiseType = (type) => {
    setWeaponType(type);
    setTypeChosen(true);
  };

  const backWeapon = () => setTypeChosen(false);

  let newWeapons = weapons.filter(
    (weapon) =>
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        weapon.elements.find((element) => element.type === selectedOption)) ||
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedOption === "") ||
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedOption === "0" &&
        weapon.elements.length === 0)
  );

  filterByType === "Attack" &&
    newWeapons.sort((a, b) => b.attack.display - a.attack.display);
  filterByType === "Element" &&
    newWeapons.sort((a, b) => {
      const damageA = a.elements[0]?.damage || 0;
      const damageB = b.elements[0]?.damage || 0;
      return damageB - damageA;
    });

  return (
    <>
      {!typeChosen ? (
        <div className="globalItemContainer">
          <div className="itemNavBar">
            <div className="closeButton" onClick={closePage}>
              <ImCross />
            </div>
          </div>
          <div className="typeContainer">
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("great-sword")}
              weaponType={"great-sword"}
              name={"Great Sword"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("sword-and-shield")}
              weaponType={"sword-and-shield"}
              name={"Sword & Shield"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("long-sword")}
              weaponType={"long-sword"}
              name={"Long Sword"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("hammer")}
              weaponType={"hammer"}
              name={"Hammer"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("hunting-horn")}
              weaponType={"hunting-horn"}
              name={"Hunting Horn"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("gunlance")}
              weaponType={"gunlance"}
              name={"Gunlance"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("switch-axe")}
              weaponType={"switch-axe"}
              name={"Switch Axe"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("charge-blade")}
              weaponType={"charge-blade"}
              name={"Charge Blade"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("insect-glaive")}
              weaponType={"insect-glaive"}
              name={"Insect Glaive"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("bow")}
              weaponType={"bow"}
              name={"Bow"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("light-bowgun")}
              weaponType={"light-bowgun"}
              name={"Light Bowgun"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("heavy-bowgun")}
              weaponType={"heavy-bowgun"}
              name={"Heavy Bowgun"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("dual-blades")}
              weaponType={"dual-blades"}
              name={"Dual Blades"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("lance")}
              weaponType={"lance"}
              name={"Lance"}
            />
          </div>
        </div>
      ) : (
        <div className="globalItemContainer">
          <div className="itemNavBar">
            <div className="closeButton" onClick={closePage}>
              <ImCross />
            </div>
            <div className="searchBar">
              <button onClick={backWeapon}>Choise weapon&apos;stype</button>
              <input
                name="search-bar"
                id="search-bar"
                value={searchTerm}
                onChange={handleSearchTerm}
                placeholder="Search item by name"
              />

              <div className="filters">
                <span>Filter by :</span>

                <div>
                  <select
                    name="elements"
                    value={selectedOption}
                    onChange={handleSelectOption}
                  >
                    <option value="">Elements</option>
                    <option value="fire">Fire</option>
                    <option value="poison">Poison</option>
                    <option value="dragon">Dragon</option>
                    <option value="ice">Ice</option>
                    <option value="thunder">Thunder</option>
                    <option value="sleep">Sleep</option>
                    <option value="paralysis">Paralysis</option>
                    <option value="blast">Blast</option>
                    <option value="0">None</option>
                  </select>

                  <select value={filterByType} onChange={handlefilterByType}>
                    <option value="">Damages</option>
                    <option value="Attack">Attack</option>
                    <option value="Element">Element</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="itemContainer">
            {newWeapons.map((weapon, key) => (
              <div
                key={key}
                className="item"
                onClick={() => handleWeapon(weapon)}
              >
                <p>{weapon.name}</p>
                <p className="rarity">Rarity {weapon.rarity}</p>
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
                <p>
                  Affinity :{" "}
                  {weapon.attributes.affinity
                    ? `${weapon.attributes.affinity}%`
                    : "0%"}
                </p>
                {weapon.durability && (
                  <div className="sharpnessContainer">
                    <p>Sharpness : </p>
                    <div
                      className="sharpness red"
                      style={{ width: `${weapon.durability[0].red / 3}px` }}
                    ></div>
                    <div
                      className="sharpness orange"
                      style={{ width: `${weapon.durability[0].orange / 3}px` }}
                    ></div>
                    <div
                      className="sharpness yellow"
                      style={{ width: `${weapon.durability[0].yellow / 3}px` }}
                    ></div>
                    <div
                      className="sharpness green"
                      style={{ width: `${weapon.durability[0].green / 3}px` }}
                    ></div>
                    <div
                      className="sharpness blue"
                      style={{ width: `${weapon.durability[0].blue / 3}px` }}
                    ></div>
                    <div
                      className="sharpness white"
                      style={{ width: `${weapon.durability[0].white / 3}px` }}
                    ></div>
                    <div
                      className="sharpness purple"
                      style={{ width: `${weapon.durability[0].purple / 3}px` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

Weapons.propTypes = {
  weapons: PropTypes.array.isRequired,
  handleWeapon: PropTypes.func.isRequired,
  closePage: PropTypes.func.isRequired,
};

export default Weapons;
