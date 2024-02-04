/* eslint-disable react/prop-types */
function ItemSheetSingle({
    type,
    head,
    chest,
    gloves,
    waist,
    legs,
    weapon,
    setArmorPage,
    setWeaponPage,
    toggleDisplayItem,
    deleteItem
}) {
    let actualItem = null
    switch (type) {
        case "head":
            actualItem = head
            break;
        case "chest":
            actualItem = chest
            break;
        case "gloves":
            actualItem = gloves
            break;
        case "waist":
            actualItem = waist
            break;
        case "legs":
            actualItem = legs
            break;
        case "weapon":
            actualItem = weapon
            break;

        default:
            actualItem = null
            break;
    }
    return (
        <div className="ItemSheetSingleContainer">
            <div className="ISSButtons">
                <button onClick={() => deleteItem(type)}>Delete item</button>
                {type === "weapon" ? (
                    <button onClick={() => {
                        toggleDisplayItem(null)
                        setWeaponPage(true)
                    }}>Change item</button>
                ) : (
                    <button onClick={() => {
                        toggleDisplayItem(null)
                        setArmorPage(type)
                    }}>Change item</button>
                )
                }
                <button className="ISSingleClose" onClick={() => toggleDisplayItem(null)}>Back</button>
            </div>
            <div className="ISSView">
                <h3>{actualItem.name}</h3>
                <p>Rarity {actualItem.rarity}</p>
                {type === "weapon" ? (
                    (!actualItem.assets ? (
                        <img src="./src/images/nullArmor.png" alt="weapon" />
                    ) : actualItem.assets.image ? (
                        <img src={weapon.assets.image} alt="weapon" />
                    ) : (
                        <img src={weapon.assets.icon} alt="weapon" />
                    ))
                ) : (
                    <div className="ISSDescription">
                        {(!actualItem.assets ? (
                            <img src="./src/images/nullArmor.png" alt="armor" />
                        ) : actualItem.assets.imageMale ? (
                            <img src={actualItem.assets.imageMale} alt="armor" />
                        ) : (
                            <img src={actualItem.assets.imageFemale} alt="armor" />
                        ))}
                        <div className="ISSStats">
                            <ul className='resistance'>
                                <li><img src="./src/images/icons/defense-icon.png" alt="defense" />Defense : ({actualItem.defense.base}) ({actualItem.defense.max}) ({actualItem.defense.augmented})</li>
                                <li><img src="./src/images/icons/fire-icon.png" alt="fire" />Fire Resist : {actualItem.resistances.fire}</li>
                                <li><img src="./src/images/icons/water-icon.png" alt="water" />Water Resist : {actualItem.resistances.water}</li>
                                <li><img src="./src/images/icons/ice-icon.png" alt="ice" />Ice Resist : {actualItem.resistances.ice}</li>
                                <li><img src="./src/images/icons/thunder-icon.png" alt="thunder" />Thunder Resist : {actualItem.resistances.thunder}</li>
                                <li><img src="./src/images/icons/dragon-icon.png" alt="dragon" />Dragon Resist : {actualItem.resistances.dragon}</li>
                            </ul>

                            {actualItem.skills.length > 0 &&
                                <div className="ISSSkillsList">
                                    <p>Skills list</p>
                                    <ul>
                                        {actualItem.skills.map((skill, key) => { return <li key={key}>{skill.skillName} - {skill.level}</li> })}
                                    </ul>
                                </div>}
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default ItemSheetSingle