import PropTypes from "prop-types";
import { Popup } from "semantic-ui-react";

function Skills({ playerSkills, skills }) {
  return (
    <div className="statsCard">
      <h3>Skills</h3>
      {playerSkills.map((playerSkill, index) => (
        <Popup
          key={index}
          className="statPopup"
          content={skills.map((skill, index) => {
            if (skill.name === playerSkill.skillName) {
              return (
                <div key={index}>
                  <h3>{skill.name}</h3>
                  <hr />
                  <p className="popupDescription">{skill.description}</p>
                  {skill.ranks.map((rank, indexRank) => {
                    return (
                      <p
                        key={indexRank}
                        className={
                          indexRank + 1 === playerSkill.level
                            ? "popupRank popupActualRank"
                            : "popupRank"
                        }
                      >
                        Lv {indexRank + 1} : {rank.description}
                      </p>
                    );
                  })}
                </div>
              );
            }
          })}
          trigger={
            <div className={index % 2 === 0 ? "bgOn" : ""}>
              <span>{playerSkill.skillName}</span>

              <span>
                {skills.map((skill) => {
                  if (skill.name === playerSkill.skillName) {
                    return (
                      <span key={skill.id} className="skillRank">
                        {skill.ranks.map((rank, index) => {
                          if (index < playerSkill.level)
                            return (
                              <div key={index} className="rank skillOn"></div>
                            );
                          else
                            return (
                              <div key={index} className="rank skillOff"></div>
                            );
                        })}
                      </span>
                    );
                  }
                })}
              </span>
            </div>
          }
        />
      ))}
    </div>
  );
}
Skills.propTypes = {
  playerSkills: PropTypes.arrayOf(
    PropTypes.shape({
      skillName: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      ranks: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Skills;
