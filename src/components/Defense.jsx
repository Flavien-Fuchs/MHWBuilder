/* eslint-disable react/prop-types */
import '../css/Stats.css'


function Defense({ baseDefense, maxDefense, augDefense, resFire, resWater, resIce, resThunder, resDragon }) {
    return (
        <div className="statsCard">
            <h3>Defensives stats</h3>
            <p><img className='icon' src="./src/images/icons/defense-icon.png" alt="fire" />Defense ({baseDefense}, {maxDefense}, {augDefense})</p>
            <ul>
                <li><img className='icon' src="./src/images/icons/fire-icon.png" alt="fire" />Fire Resist : {resFire}</li>
                <li><img className='icon' src="./src/images/icons/water-icon.png" alt="water" />Water Resist : {resWater}</li>
                <li><img className='icon' src="./src/images/icons/ice-icon.png" alt="ice" />Ice Resist : {resIce}</li>
                <li><img className='icon' src="./src/images/icons/thunder-icon.png" alt="thunder" />Thunder Resist : {resThunder}</li>
                <li><img className='icon' src="./src/images/icons/dragon-icon.png" alt="dragon" />Dragon Resist : {resDragon}</li>
            </ul>
        </div>
    )
}

export default Defense