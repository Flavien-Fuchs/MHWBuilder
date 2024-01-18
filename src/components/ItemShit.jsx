/* eslint-disable react/prop-types */
import '../css/ItemShit.css'


function ItemShit({ head, chest, gloves, waist, legs, setArmurPage }) {
    return (
        <div className="ItemShit">

            <div className="Slot head" onClick={() => { setArmurPage('head') }}>
                <p>helm</p>
                {head && <img src={head.assets.imageMale} alt="head" />}
            </div>

            <div className="Slot chest" onClick={() => { setArmurPage('chest') }}>
                <p>chest</p>
                {chest && <img src={chest.assets.imageMale} alt="chest" />}
            </div>

            <div className="Slot gloves" onClick={() => { setArmurPage('gloves') }}>
                <p>gloves</p>
                {gloves && <img src={gloves.assets.imageMale} alt="chest" />}
            </div>

            <div className="Slot waist" onClick={() => { setArmurPage('waist') }}>
                <p>waist</p>
                {waist && <img src={waist.assets.imageMale} alt="chest" />}
            </div>

            <div className="Slot legs" onClick={() => { setArmurPage('legs') }}>
                <p>legs</p>
                {legs && <img src={legs.assets.imageMale} alt="chest" />}
            </div>

        </div>
    )
}

export default ItemShit