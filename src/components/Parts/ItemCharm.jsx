/* eslint-disable react/prop-types */
function ItemCharm({ charm, toggleDisplayItem, setCharmsPage }) {
    return (charm ?
        (
            <div className="charm" onClick={() => { toggleDisplayItem("charm") }}>
                <img src="./src/images/charm-icon.png" alt="armor" />
            </div>
        ) : (

            <div className="charm empty" onClick={() => {
                setCharmsPage("charm")
            }}>
            </div>
        )
    )
}

export default ItemCharm