/* eslint-disable react/prop-types */
import '../css/Items.css'
import { useState } from 'react'
/* import ItemArmor from './ItemArmor'; */

function Armors({ armors, handleArmor, type, closePage }) {
  const [searchTerm, setSearchterm] = useState("")
  const [showBar, setShowBar] = useState(false)
  const [searchType, setSearchType] = useState("armor")
  const [filterByDefense, setFilterByDefense] = useState(null)
  const [filterByResistance, setFilterByResistance] = useState(null)


  const handleFilterByDefense = (event) => {
    setFilterByDefense(event.target.value);
  };

  const handleFilterByResistance = (event) => {
    setFilterByResistance(event.target.value);
  };

  const handleShowBar = ()=>{
    setShowBar(!showBar)
  }

  const handleSearchTerm = (event)=>{
    setSearchterm(event.target.value)
  }


    let newArmors = []

    {searchType === "armor" && (
    armors.data.filter((item) => {
        if (item.type === type && item.name.toLowerCase().includes(searchTerm.toLowerCase())) {  
          return newArmors.push(item)
        }
    }))}

    

    {searchType === "skill" && (
      armors.data.filter((item)=>{
        item.skills.filter((skill)=> {
          if(item.type === type && skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())) {  
            return newArmors.push(item)
          } 
      })})
    )}

    {filterByDefense === "base" && 
    (newArmors.sort((a, b) => b.defense.base - a.defense.base))}

    
    {filterByDefense === "max" && 
    (newArmors.sort((a, b) => b.defense.max - a.defense.max))}

    
    {filterByDefense === "augmented" && 
    (newArmors.sort((a, b) => b.defense.augmented - a.defense.augmented))}

    
    {filterByResistance === "fire" && 
    (newArmors.sort((a, b) => b.resistances.fire - a.resistances.fire))}

    
    {filterByResistance === "water" && 
    (newArmors.sort((a, b) => b.resistances.water - a.resistances.water))}

    
    {filterByResistance === "ice" && 
    (newArmors.sort((a, b) => b.resistances.ice - a.resistances.ice))}

    
    {filterByResistance === "thunder" && 
    (newArmors.sort((a, b) => b.resistances.thunder - a.resistances.thunder))}

    
    {filterByResistance === "dragon" && 
    (newArmors.sort((a, b) => b.resistances.dragon - a.resistances.dragont))}

    

    

  


    return (
        <>
            <div className="itemContainer">
                <div className='itemNavBar'>
                    <button onClick={closePage}>Close Page</button>
                    <button className='search-button' onClick={handleShowBar}><img src='src\images\icons\loupe.png'/></button>
                    {showBar && 
                    <>
                    (<input 
                    name='search-bar'
                    id='search-bar'
                    value={searchTerm}
                    onChange={handleSearchTerm}
                    ></input>
                    <label>
                <input type='radio' name='search-type' value='armor' checked={searchType === 'armor'} onChange={() => setSearchType('armor')} />
                Armor
            </label>
            <label>
                <input type='radio' name='search-type' value='skill' checked={searchType === 'skill'} onChange={() => setSearchType('skill')} />
                Skill
            </label>
            
                    )
                    
                    </>}
                    <label htmlFor="FilterByType">Filter by Defense</label>
                    <select value={filterByDefense} onChange={handleFilterByDefense}>
                        <option value=""></option>
                        <option value="base">Base</option>
                        <option value="max">Max</option>
                        <option value="augmented">Augmented</option>
                    </select>
                    <label htmlFor="FilterByType">Filter by Resistance</label>
                    <select value={filterByResistance} onChange={handleFilterByResistance}>
                        <option value=""></option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="ice">Ice</option>
                        <option value="thunder">Thunder</option>
                        <option value="dragon">Dragon</option>
                    </select>
                     
                    
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
