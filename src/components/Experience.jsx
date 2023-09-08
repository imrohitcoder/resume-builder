import React from "react";

const Experience = ({
  workExperience,
  workExperienceHandler,
  yourJob,
  YourJobHandler,
  companyName,
  companyNameHandler,
  date,
  dateHandler,
  keyPoint,
  keyPointHandler,
  addKeyPointHandler,
}) => {
  return (
    <div>
      <div>
        <h3 className="name-heading">Experience/Projects</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="work experience"
          value={workExperience}
          onChange={workExperienceHandler}
        />
      </div>

      <div>
        <h3 className="name-heading">Your Job</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="Your Job"
          value={yourJob}
          onChange={YourJobHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">Company/Institute</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={companyNameHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">Date</h3>
        <input
          type="date"
          placeholder="Company Name"
          value={date}
          onChange={dateHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">About Your Work You Have Done</h3>
        <input
          type="text"
          placeholder="Write About Your Work"
          value={keyPoint}
          className="skill-input"
          onChange={keyPointHandler}
        />
        <button className="add-btn" onClick={addKeyPointHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Experience;
