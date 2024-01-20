/* eslint-disable react/prop-types */
import '../css/ItemShit.css'


function ItemShit({ head, chest, gloves, waist, legs, setArmurPage }) {
    return (
        <div className="ItemShit">

            <div className="Slot head" onClick={() => { setArmurPage('head') }}>
                {/* <p>helm</p> */}
                {head && (!head.assets ? <img src="./src/images/nullArmor.png" alt="armor" /> : ((head.assets.imageMale) ? <img src={head.assets.imageMale} alt="head" /> : <img src={head.assets.imageFemale} alt="head" />))}
            </div>

            <div className="Slot chest" onClick={() => { setArmurPage('chest') }}>
                {/* <p>chest</p> */}
                {chest && (!chest.assets ? <img src="./src/images/nullArmor.png" alt="armor" /> : ((chest.assets.imageMale) ? <img src={chest.assets.imageMale} alt="chest" /> : <img src={chest.assets.imageFemale} alt="chest" />))}
            </div>

            <div className="Slot gloves" onClick={() => { setArmurPage('gloves') }}>
                {/* <p>gloves</p> */}
                {gloves && (!gloves.assets ? <img src="./src/images/nullArmor.png" alt="armor" /> : ((gloves.assets.imageMale) ? <img src={gloves.assets.imageMale} alt="gloves" /> : <img src={gloves.assets.imageFemale} alt="gloves" />))}
            </div>

            <div className="Slot waist" onClick={() => { setArmurPage('waist') }}>
                {/* <p>waist</p> */}
                {waist && (!waist.assets ? <img src="./src/images/nullArmor.png" alt="armor" /> : ((waist.assets.imageMale) ? <img src={waist.assets.imageMale} alt="waist" /> : <img src={waist.assets.imageFemale} alt="waist" />))}
            </div>

            <div className="Slot legs" onClick={() => { setArmurPage('legs') }}>
                {/* <p>legs</p> */}
                {legs && (!legs.assets ? <img src="./src/images/nullArmor.png" alt="armor" /> : ((legs.assets.imageMale) ? <img src={legs.assets.imageMale} alt="legs" /> : <img src={legs.assets.imageFemale} alt="legs" />))}
            </div>

        </div>
    )
}

export default ItemShit