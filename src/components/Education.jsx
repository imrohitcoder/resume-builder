import React from "react";

const Education = ({
  course,
  courseHandler,
  university,
  universityHandler,
  studyPeriodHandler,
  studyPeriod,
}) => {
  return (
    <div>
      <div>
        <h3 className="name-heading">Course</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="Write here the course"
          value={course}
          onChange={courseHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">University</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="Write university/college name"
          value={university}
          onChange={universityHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">Date</h3>
        <input
          type="date"
          placeholder="Company Name"
          value={studyPeriod}
          onChange={studyPeriodHandler}
        />
      </div>
    </div>
  );
};

export default Education;
