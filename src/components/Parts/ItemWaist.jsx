/* eslint-disable react/prop-types */
function ItemWaist({ waist, toggleDisplayItem, setArmorPage }) {
    return (
        waist ? (
            <div className="slot waist" onClick={() => toggleDisplayItem("waist")}>
                {(!waist.assets ? (
                    <img src="./src/images/nullArmor.png" alt="armor" />
                ) : waist.assets.imageMale ? (
                    <img src={waist.assets.imageMale} alt="waist" />
                ) : (
                    <img src={waist.assets.imageFemale} alt="waist" />
                ))}
            </div>
        ) : (<div className="slot waist empty" onClick={() => setArmorPage("waist")}>
        </div>
        )
    )
}

export default ItemWaist