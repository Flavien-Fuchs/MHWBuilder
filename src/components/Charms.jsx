/* eslint-disable react/prop-types */
import '../css/Items.css'

function Charms({ charms, handleCharms, closePage }) {
    return (
        <>
            <div className="itemContainer">
                <div className='itemNavBar'>
                    <button onClick={closePage}>Close Page</button>
                </div>

                {charms.map((charm, key) => {
                    let actualCharm = charm.ranks[charm.ranks.length - 1]

                    return (<div key={key} className="item" onClick={() => { handleCharms(charm) }} >
                        <p>{charm.name}</p>
                        <p>Rarity {actualCharm.rarity}</p>
                        <img className='imgCharm' src="./src/images/charm-icon.png" alt="charm" />
                        <p>skills list</p>
                        <ul>
                            {actualCharm.skills.map((skill, key) => { return <li key={key}>{skill.skillName} - {skill.level}</li> })}
                        </ul>
                    </div>)
                })}
            </div >

        </>
    )

}

export default Charms