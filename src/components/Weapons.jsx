/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Items.css";

function Weapons({ weapons, handleWeapon, closePage }) {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState(null);
  const [searchTerm, setSearchterm] = useState("")
  const [showBar, setShowBar] = useState(false)
  const [selectedOption, setSelectedOption] = useState("");
  const [filterBytype, setFilterByType] = useState(null)

  const handleFilterByType = (event) => {
    setFilterByType(event.target.value);
  };

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShowBar = ()=>{
    setShowBar(!showBar)
    }

  const handleSearchTerm = (event)=>{
    setSearchterm(event.target.value)
    }

  const handleChoiseType = (type) => {
    setWeaponType(type);
    setTypeChosen(true);
  };

  const backWeapon = () => {
    setTypeChosen(false);
  };

  let newWeapons = weapons.data.filter((weapon) => 
  (weapon.type === weaponType && weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  weapon.elements.find(element => element.type === selectedOption)) || 
  (weapon.type === weaponType && weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
  selectedOption === "") ||
  (weapon.type === weaponType && weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
  selectedOption === "0" && weapon.elements.length === 0)
);

{filterBytype === 'Attack' && 
(newWeapons.sort((a, b) => b.attack.display - a.attack.display))}

{filterBytype === 'Alphabetically' && 
(newWeapons.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
  }


 
            
  weapons.data.map((weapon)=>{
    weapon.elements.map((element)=> console.log("Types :",element.type))
    })

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
                <>
                    <button onClick={backWeapon}>Choise weapon&apos;stype</button>
                    <button className='search-button' onClick={handleShowBar}><img src='src\images\icons\loupe.png'/></button>
                    {showBar &&  
                    <>
                        (<input 
                        name='search-bar'
                        id='search-bar'
                        value={searchTerm}
                        onChange={handleSearchTerm}
                        >
                        </input>)
                    </>
                    }
                    <label htmlFor="Elements">Element</label>
                    <select value={selectedOption} onChange={handleSelectOption}>
                        <option value=""></option>
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
                    <label htmlFor="filterByType">Filter by</label>
                    <select value={filterBytype} onChange={handleFilterByType}>
                        <option value=""></option>
                        <option value="Attack">Attack</option>
                        <option value="Alphabetically">Alphabetically</option>
                    </select>
                     
                    
              </>
            )}
          </div>
          {newWeapons.map((weapon, key) => (
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
