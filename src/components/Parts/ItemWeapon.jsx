/* eslint-disable react/prop-types */
function ItemWeapon({ weapon, toggleDisplayItem, setWeaponPage }) {
    return (
        weapon ?
            (
                <div className="slot weapon" onClick={() => toggleDisplayItem("weapon")}>
                    {(!weapon.assets ? (
                        <img src="./src/images/nullArmor.png" alt="weapon" />
                    ) : weapon.assets.image ? (
                        <img src={weapon.assets.image} alt="legs" />
                    ) : (
                        <img src={weapon.assets.icon} alt="legs" />
                    ))}
                </div>
            ) : (
                <div className="slot weapon" onClick={setWeaponPage}>
                </div>)
    )
}

export default ItemWeapon