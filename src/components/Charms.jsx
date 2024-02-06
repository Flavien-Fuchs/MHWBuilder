/* eslint-disable react/prop-types */
import '../css/Items.css'
import { ImCross } from "react-icons/im";
import { useState } from 'react';


function Charms({ charms, handleCharms, closePage }) {
    const [searchTerm, setSearchterm] = useState("")
    const handleSearchTerm = (event) => setSearchterm(event.target.value)

    let newCharms = [];

    charms.filter((item) => {
        item.ranks[item.ranks.length - 1].skills.filter((skill) => {
            if (
                skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
                newCharms.push(item)
        })
    })

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
                </div>
            </div>

            <div className="itemContainer">
                {newCharms.map((charm, key) => {
                    let actualCharm = charm.ranks[charm.ranks.length - 1]

                    return (<div key={key} className="item" onClick={() => { handleCharms(charm) }} >
                        <p>{charm.name}</p>
                        <p className="rarity">Rarity {actualCharm.rarity}</p>
                        <img className='imgCharm' src="./src/images/charm-icon.png" alt="charm" />
                        <p>skills list</p>
                        <ul>
                            {actualCharm.skills.map((skill, key) => { return <li key={key}>{skill.skillName} - {skill.level}</li> })}
                        </ul>
                    </div>)
                })}
            </div >
        </div>
    )

}

export default Charms