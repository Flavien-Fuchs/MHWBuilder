/* eslint-disable react/prop-types */
import '../css/Defense.css'


function Defense({ baseDefense, maxDefense, AugDefense, resFire, resWater, resIce, resThunder, resDragon }) {
    return (
        <div className="defense">
            <h3>defensives stats</h3>
            <p>Defense ({baseDefense}, {maxDefense}, {AugDefense})</p>
            <p>resistance</p>
            <ul>
                <li>Fire : {resFire}</li>
                <li>Water : {resWater}</li>
                <li>Ice : {resIce}</li>
                <li>Thunder : {resThunder}</li>
                <li>Dragon : {resDragon}</li>
            </ul>
        </div>
    )
}

export default Defense