import React from "react";

const Skills = ({ skill, skillHandler, addSkillHandler, skillData }) => {
  return (
    <div className="skill-outer">
      <h3 className="name-heading">skills</h3>
      {skillData?.length > 0 && (
        <div className="skill-main">
          {skillData?.map((s, index) => {
            return (
              <div key={index}>
                <h4>{s}</h4>
              </div>
            );
          })}
        </div>
      )}
      <div className="input-container">
        <input
          type="text"
          placeholder="Add skill"
          value={skill}
          onChange={skillHandler}
          className="skill-input"
          onKeyUp={(e) => {
            // console.log(e.key);
            if (skill && e.key === "Enter") {
              addSkillHandler();
            }
          }}
        />
        <button className="add-btn" onClick={addSkillHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Skills;
