import React from "react";
import LeftResume from "./LeftResume";
import RightResume from "./RightResume";
const Resume = ({
  name,
  jobRole,
  intro,
  workExperience,
  yourJob,
  companyName,
  date,
  keyPointData,
  course,
  university,
  print,
  email,
  contactNo,
  location,
  linkedIn,
  imageUrl,
  skillData,
  projectsData,
  achievement,
  studyPeriod,
}) => {
  return (
    <div className="resume" style={{ width: print ? "100%" : "70%" }}>
      <LeftResume
        name={name}
        jobRole={jobRole}
        intro={intro}
        workExperience={workExperience}
        yourJob={yourJob}
        companyName={companyName}
        date={date}
        keyPointData={keyPointData}
        course={course}
        university={university}
        imageUrl={imageUrl}
        studyPeriod={studyPeriod}
      />

      <RightResume
        email={email}
        contactNo={contactNo}
        location={location}
        linkedIn={linkedIn}
        skillData={skillData}
        projectsData={projectsData}
        achievement={achievement}
      />
    </div>
  );
};

export default Resume;
