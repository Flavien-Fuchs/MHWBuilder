/* eslint-disable react/prop-types */
function ItemLegs({ legs, toggleDisplayItem, setArmorPage }) {
    return (
        legs ? (
            <div className="slot legs" onClick={() => toggleDisplayItem("legs")}>
                {(!legs.assets ? (
                    <img src="./src/images/nullArmor.png" alt="armor" />
                ) : legs.assets.imageMale ? (
                    <img src={legs.assets.imageMale} alt="legs" />
                ) : (
                    <img src={legs.assets.imageFemale} alt="legs" />
                ))}
            </div>
        ) : (
            <div className="slot legs empty" onClick={() => setArmorPage("legs")}>
            </div>
        )
    )
}

export default ItemLegs