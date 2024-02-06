/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Items.css";
import { ImCross } from "react-icons/im";

function Weapons({ weapons, handleWeapon, closePage }) {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState(null);
  const [searchTerm, setSearchterm] = useState("")
  const [selectedOption, setSelectedOption] = useState("");
  const [filterByType, setfilterByType] = useState(null)

  const handlefilterByType = (event) => setfilterByType(event.target.value);
  const handleSelectOption = (event) => setSelectedOption(event.target.value);
  const handleSearchTerm = (event) => setSearchterm(event.target.value)
  const handleChoiseType = (type) => {
    setWeaponType(type);
    setTypeChosen(true);
  };
  const backWeapon = () => setTypeChosen(false);

  let newWeapons = weapons.filter((weapon) =>
    (weapon.type === weaponType && weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      weapon.elements.find(element => element.type === selectedOption)) ||
    (weapon.type === weaponType && weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      selectedOption === "") ||
    (weapon.type === weaponType && weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      selectedOption === "0" && weapon.elements.length === 0)
  );


  filterByType === 'Attack' && newWeapons.sort((a, b) => b.attack.display - a.attack.display)
  filterByType === 'Element' && newWeapons.sort((a, b) => {
    const damageA = a.elements[0]?.damage || 0;
    const damageB = b.elements[0]?.damage || 0;
    return damageB - damageA;
  })

  return (
    <>
      {!typeChosen ? (
        <div className="GlobalItemContainer">

          <div className="itemNavBar">
            <div className='closeButton' onClick={closePage} >
              <ImCross />
            </div>
          </div>

          <div className="typeContainer">
            <div className="weaponType" onClick={() => handleChoiseType("great-sword")}>
              <img src="./src/images/ArmorsIcons/great-sword.png" alt="great-sword" />
              Great Sword
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("sword-and-shield")}>
              <img src="./src/images/ArmorsIcons/sword-and-shield.png" alt="sword-and-shield" />
              Sword & Shield
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("dual-blades")}>
              <img src="./src/images/ArmorsIcons/dual-blades.png" alt="dual-blades" />
              Dual Blades
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("long-sword")}>
              <img src="./src/images/ArmorsIcons/long-sword.png" alt="long-sword" />
              Long Sword
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("hammer")}>
              <img src="./src/images/ArmorsIcons/hammer.png" alt="hammer" />
              Hammer
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("hunting-horn")}>
              <img src="./src/images/ArmorsIcons/hunting-horn.png" alt="hunting-horn" />
              Hunting Horn
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("lance")}>
              <img src="./src/images/ArmorsIcons/lance.png" alt="lance" />
              Lance
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("gunlance")}>
              <img src="./src/images/ArmorsIcons/gunlance.png" alt="gunlance" />
              Gunlance
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("switch-axe")}>
              <img src="./src/images/ArmorsIcons/switch-axe.png" alt="switch-axe" />
              Switch Axe
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("charge-blade")}>
              <img src="./src/images/ArmorsIcons/charge-blade.png" alt="charge-blade" />
              Charge Blade
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("insect-glaive")}>
              <img src="./src/images/ArmorsIcons/insect-glaive.png" alt="insect-glaive" />
              Insect Glaive
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("bow")}>
              <img src="./src/images/ArmorsIcons/bow.png" alt="bow" />
              Bow
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("light-bowgun")}>
              <img src="./src/images/ArmorsIcons/light-bowgun.png" alt="light-bowgun" />
              Light Bowgun
            </div>
            <div className="weaponType" onClick={() => handleChoiseType("heavy-bowgun")}>
              <img src="./src/images/ArmorsIcons/heavy-bowgun.png" alt="heavy-bowgun" />
              Heavy Bowgun
            </div>
          </div>
        </div>
      ) : (
        <div className="GlobalItemContainer">

          <div className="itemNavBar">
            <div className='closeButton' onClick={closePage} >
              <ImCross />
            </div>
            <div className="searchBar">
              <button onClick={backWeapon}>Choise weapon&apos;stype</button>
              <input
                name='search-bar'
                id='search-bar'
                value={searchTerm}
                onChange={handleSearchTerm}
                placeholder="Search item by name"
              />

              <div className="filters">
                <span>Filter by :</span>

                <div>
                  <select name="elements" value={selectedOption} onChange={handleSelectOption}>
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
        </div>
      )}
    </>
  );
}

export default Weapons;
