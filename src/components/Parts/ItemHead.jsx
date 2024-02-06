/* eslint-disable react/prop-types */
function ItemHead({ head, toggleDisplayItem, setArmorPage }) {
    return (
        head ?
            (
                <div className="slot head" onClick={() => { toggleDisplayItem("head") }}>
                    {(!head.assets ? (
                        <img src="./src/images/nullArmor.png" alt="armor" />
                    ) : head.assets.imageMale ? (
                        <img src={head.assets.imageMale} alt="head" />
                    ) : (
                        <img src={head.assets.imageFemale} alt="head" />
                    ))}
                </div>
            ) : (

                <div className="slot head empty" onClick={() => { setArmorPage("head") }}>
                </div>
            )
    )
}

export default ItemHead