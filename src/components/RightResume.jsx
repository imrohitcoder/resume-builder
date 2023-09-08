import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
const RightResume = ({
  email,
  contactNo,
  location,
  linkedIn,
  skillData,
  projectsData,
  achievement,
}) => {
  return (
    <div className="right-resume">
      <div className="contact-section">
        <div>
          <i
            style={{
              color: "rgb(44, 44, 48)",
              backgroundColor: "white",
              padding: "1px 4px",
              borderRadius: "5px",
              marginRight: "4px",
            }}
          >
            <MdEmail />
          </i>{" "}
          <h4>{email ? email : "enteremail@gmail.com"}</h4>
        </div>
        <div>
          <i
            style={{
              color: "rgb(44, 44, 48)",
              backgroundColor: "white",
              padding: "1px 4px",
              borderRadius: "5px",
              marginRight: "4px",
            }}
          >
            <IoMdCall />
          </i>{" "}
          <h4>{contactNo ? contactNo : "0123-456-789"}</h4>
        </div>
        <div>
          <i
            style={{
              color: "rgb(44, 44, 48)",
              backgroundColor: "white",
              padding: "1px 4px",
              borderRadius: "5px",
              marginRight: "4px",
            }}
          >
            <MdLocationOn />
          </i>
          <h4>{location ? location : "Kokar,Ranchi"}</h4>{" "}
        </div>
        <div>
          <i
            style={{
              color: "rgb(44, 44, 48)",
              backgroundColor: "white",
              padding: "1px 4px",
              borderRadius: "5px",
              marginRight: "4px",
            }}
          >
            <IoLogoLinkedin />
          </i>{" "}
          <h4>{linkedIn ? linkedIn : "linked.com/in/rohitkr"}</h4>
        </div>
      </div>
      <div className="skill-section">
        <div>
          <div className="skills">
            <i style={{ marginRight: "5px" }}>
              <BsPersonWorkspace />
            </i>
            <h4>skills</h4>
          </div>
          {skillData?.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="items">{item}</h4>
              </div>
            );
          })}
        </div>
        <div>
          <div className="skills">
            <i style={{ marginRight: "5px" }}>
              <AiFillProject />
            </i>
            <h4>projects</h4>
          </div>
          {projectsData?.map((item, index) => {
            return (
              <div key={index}>
                <h5 className="items">{item}</h5>
              </div>
            );
          })}
        </div>
        <div>
          {/* {achievement ? (
            <div>
              <h3>ACHIEVEMENTS</h3>
              {achievement}
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
};

export default RightResume;
