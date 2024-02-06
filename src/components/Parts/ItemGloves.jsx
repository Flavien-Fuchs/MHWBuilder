/* eslint-disable react/prop-types */
function ItemGloves({ gloves, toggleDisplayItem, setArmorPage }) {
    return (
        gloves ? (
            <div className="slot gloves" onClick={() => { toggleDisplayItem("gloves"); }}>
                {(!gloves.assets ? (
                    <img src="./src/images/nullArmor.png" alt="armor" />
                ) : gloves.assets.imageMale ? (
                    <img src={gloves.assets.imageMale} alt="gloves" />
                ) : (
                    <img src={gloves.assets.imageFemale} alt="gloves" />
                ))}
            </div>
        ) : (
            <div className="slot gloves empty" onClick={() => { setArmorPage("gloves"); }}>
            </div>
        )
    )
}

export default ItemGloves