/* eslint-disable react/prop-types */
function Attack({ attack, elementalAttack }) {
    return (
        <div className="statsCard">
            <h3>Offensives stats</h3>
            <p>Attack : {attack}</p>
            {elementalAttack[0] && <p>Element : {elementalAttack[0].damage} ({elementalAttack[0].type})</p>}
        </div>
    )
}

export default Attack