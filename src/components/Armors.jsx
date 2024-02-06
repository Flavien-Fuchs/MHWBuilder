/* eslint-disable react/prop-types */
import '../css/Items.css'
import { useState } from 'react'
import { ImCross } from "react-icons/im";


function Armors({ armors, handleArmor, type, closePage }) {
  const [searchTerm, setSearchterm] = useState("")
  const [filterByDefense, setFilterByDefense] = useState(null)
  const [filterByResistance, setFilterByResistance] = useState(null)

  const handleFilterByDefense = (event) => setFilterByDefense(event.target.value)
  const handleFilterByResistance = (event) => setFilterByResistance(event.target.value)
  const handleSearchTerm = (event) => setSearchterm(event.target.value)


  let newArmors = [];

  armors.filter((item) => {
    item.skills.filter((skill) => {
      if (item.type === type && item.assets &&
        (

          skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ) newArmors.push(item)
    })
  })


  filterByDefense === "base" && (newArmors.sort((a, b) => b.defense.base - a.defense.base))
  filterByDefense === "max" && (newArmors.sort((a, b) => b.defense.max - a.defense.max))
  filterByDefense === "augmented" && (newArmors.sort((a, b) => b.defense.augmented - a.defense.augmented))
  filterByResistance === "fire" && (newArmors.sort((a, b) => b.resistances.fire - a.resistances.fire))
  filterByResistance === "water" && (newArmors.sort((a, b) => b.resistances.water - a.resistances.water))
  filterByResistance === "ice" && (newArmors.sort((a, b) => b.resistances.ice - a.resistances.ice))
  filterByResistance === "thunder" && (newArmors.sort((a, b) => b.resistances.thunder - a.resistances.thunder))
  filterByResistance === "dragon" && (newArmors.sort((a, b) => b.resistances.dragon - a.resistances.dragon))

  return (

    <div className="GlobalItemContainer">
      <div className='itemNavBar'>
        <div className='closeButton' onClick={closePage} >
          <ImCross />
        </div>

        <div className="searchBar">
          <input
            name='search-bar'
            id='search-bar'
            value={searchTerm}
            onChange={handleSearchTerm}
            placeholder='Search item by name or skill'
          />
          <div className="filters">
            <span>Filter by :</span>

            <div>
              <select name="defense" value={filterByDefense} onChange={handleFilterByDefense}>
                <option value="">Defense</option>
                <option value="base">Base</option>
                <option value="max">Max</option>
                <option value="augmented">Augmented</option>
              </select>

              <select name="resistance" value={filterByResistance} onChange={handleFilterByResistance}>
                <option value="">Resistance</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="ice">Ice</option>
                <option value="thunder">Thunder</option>
                <option value="dragon">Dragon</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className="itemContainer">
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
    </div>
  );
}

export default Armors;
