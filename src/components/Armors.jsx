/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState } from 'react'
import '../css/Items.css'
/* import ItemArmor from './ItemArmor'; */



function Armors({ handleArmor, type, closePage }) {

    const [armors, setArmors] = useState(null);

    axios
        .get('https://mhw-db.com/armor')
        .then((response) => {
            let newArmors = []
            response.data.map((item) => {
                if (item.type === type) newArmors.push(item)
            })
            setArmors(newArmors)
        })


    return (
        <>
            {armors && (<div className="itemContainer">
                <button onClick={closePage}>Close Page</button>

                {armors.slice(0, 20).map((armor, key) => {

                    return (<div key={key} className="item" onClick={() => { handleArmor(armor, type) }} >
                        <p>armor name: {armor.name}</p>
                        <img src={armor.assets.imageMale} alt="armor" />
                    </div>)
                })}
            </div >)
            }
        </>
    )

}

export default Armors