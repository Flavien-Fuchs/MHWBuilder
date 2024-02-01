/* eslint-disable react/prop-types */
function Skills({ playerSkills }) {
    return (
        <div className="statsCard">
            <h3>Skills</h3>
            {
                playerSkills.map(playerSkill => (
                    <div key={playerSkill.id} className="bgOn"><span>{playerSkill.skillName} ({playerSkill.level})</span></div>
                ))
            }
        </div>
    )
}

export default Skills