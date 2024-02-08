/* eslint-disable react/prop-types */
function ItemChest({ chest, toggleDisplayItem, setArmorPage }) {
    return (
        chest ? (
            <div className="slot chest" onClick={() => toggleDisplayItem("chest")}>
                {(!chest.assets ? (
                    <img src="./src/images/nullArmor.png" alt="armor" />
                ) : chest.assets.imageMale ? (
                    <img src={chest.assets.imageMale} alt="chest" />
                ) : (
                    <img src={chest.assets.imageFemale} alt="chest" />
                ))}
            </div>
        ) : (
            <div className="slot chest empty" onClick={() => setArmorPage("chest")}>
            </div>
        )
    )
}

export default ItemChest