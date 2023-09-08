import React from "react";
import { MdWork } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
const LeftResume = ({
  name,
  jobRole,
  intro,
  // workExperience,
  yourJob,
  companyName,
  date,
  keyPointData,
  course,
  university,
  imageUrl,
  studyPeriod,
}) => {
  return (
    <div className="left-resume">
      <div className="left-area-1">
        <div className="profile">
          <img src={imageUrl} alt="" />
        </div>
        <div className="intro">
          <h2 className="name">{name ? name : "Your Name"}</h2>
          <h4 className="job-role">{jobRole ? jobRole : "Job Role"}</h4>
          <p className="intro-para">
            {intro
              ? intro
              : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam velitfuga praesentium fugit qui vel, ad cupiditate necessitatibus harum"}
          </p>
        </div>
      </div>
      <div className="left-area-2">
        <div className="work-container">
          <i style={{ marginTop: 30, marginRight: 8 }}>
            <MdWork />
          </i>
          <h2 className="work-section">Work Experience</h2>
        </div>
        <h3 className="the-job">{yourJob ? yourJob : "Your Job"}</h3>
        <h4 className="company-name">
          {companyName ? companyName : "Compnay"}
        </h4>
        <h5 style={{ color: "goldenrod" }}>{date ? date : ""}</h5>
        <ul>
          {keyPointData.map((item, index) => {
            return (
              <li key={index} className="list-items">
                {item}
              </li>
            );
          })}
        </ul>
        {/* <ul>
          <li>afjdkfj</li>
          <li>afjdkfj</li>
          <li>afjdkfj</li>
          <li>afjdkfj</li>
        </ul> */}
      </div>
      <div className="left-area-3">
        <div className="work-container">
          <i style={{ marginTop: 31, marginRight: 8 }}>
            <MdOutlineCastForEducation />{" "}
          </i>
          <h2 className="work-section">EDUCATION</h2>
        </div>
        <h3 className="the-job">{course ? course : "Course"}</h3>
        <h4 className="company-name">
          {university ? university : "university"}
        </h4>
        <h5 style={{ color: "goldenrod" }}>{studyPeriod ? studyPeriod : ""}</h5>
      </div>
    </div>
  );
};

export default LeftResume;
