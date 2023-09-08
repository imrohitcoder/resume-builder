// import logo from "./logo.svg";
// import "./App.css";
import Resume from "./components/Resume";
// import InputArea from "./components/InputArea";
import "../src/components/Resume.css";
import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
// import { IoLogoLinkedin } from "react-icons/io";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";

function App() {
  const [showComponent, setShowComponent] = useState("info");
  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [intro, setIntro] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [yourJob, setYourJob] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [date, setDate] = useState("");
  const [studyPeriod, setStudyPeriod] = useState("");
  const [keyPoint, setKeyPoint] = useState("");
  const [keyPointData, setKeyPointData] = useState([]);
  const [course, setCourse] = useState("");
  const [university, setUniversity] = useState("");
  const [print, setPrint] = useState(false);
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [skill, setSkill] = useState("");
  const [skillData, setSkillData] = useState([]);
  const [projects, setProjects] = useState("");
  const [projectsData, setProjectsData] = useState([]);
  const [achievement, setAchievements] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const jobRoleHandler = (e) => {
    setJobRole(e.target.value);
  };
  const introHandler = (e) => {
    setIntro(e.target.value);
  };
  const workExperienceHandler = (e) => {
    setWorkExperience(e.target.value);
  };
  const YourJobHandler = (e) => {
    setYourJob(e.target.value);
  };
  const companyNameHandler = (e) => {
    setCompanyName(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const keyPointHandler = (e) => {
    setKeyPoint(e.target.value);
  };
  const addKeyPointHandler = () => {
    if (!keyPoint) {
      return;
    } else {
      setKeyPointData([...keyPointData, keyPoint]);
      setKeyPoint("");
    }
  };
  const courseHandler = (e) => {
    setCourse(e.target.value);
  };
  const universityHandler = (e) => {
    setUniversity(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const contactNoHandler = (e) => {
    setContactNo(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const linkedInHandler = (e) => {
    setLinkedIn(e.target.value);
  };
  const skillHandler = (e) => {
    setSkill(e.target.value);
  };
  const addSkillHandler = () => {
    if (!skill) {
      return;
    }
    setSkillData([...skillData, skill]);
    setSkill("");
  };
  const projectsHandler = (e) => {
    setProjects(e.target.value);
  };
  const addProjects = () => {
    if (!projects) {
      return;
    }
    setProjectsData([...projectsData, projects]);
    setProjects("");
  };
  const achievementHandler = (e) => {
    setAchievements(e.target.value);
  };
  const studyPeriodHandler = (e) => {
    setStudyPeriod(e.target.value);
  };
  // console.log(projectsData);
  // console.log("url after changing is", imageUrl);
  return (
    <div className="main-component">
      {/* {!print && (
        <div className="operation">
          <div>
            <input
              type="file"
              id="myFile"
              accept="image/*"
              name="filename"
              onChange={(e) => {
                console.log("file is", e.target);
                let url = URL.createObjectURL(e.target.files[0]);
                setImageUrl(url);
              }}
            ></input>
          </div>
          <div>
            <h3>Enter your name</h3>
            <input
              type="text"
              placeholder="enter your name"
              value={name}
              onChange={nameHandler}
            />
          </div>
          <div>
            <h3>Job Role</h3>
            <input
              type="text"
              placeholder="Job Role"
              value={jobRole}
              onChange={jobRoleHandler}
            />
          </div>
          <div>
            <h3>About Yourself</h3>
            <textarea
              name=""
              id="text-area"
              cols="20"
              rows="5"
              onChange={introHandler}
              value={intro}
              placeholder="Write About Yourself"
            ></textarea>
          </div>
          <div>
            <h3>Experience/Projects</h3>
            <input
              type="text"
              placeholder="work experience"
              value={workExperience}
              onChange={workExperienceHandler}
            />
          </div>

          <div>
            <h3>Your Job</h3>
            <input
              type="text"
              placeholder="Your Job"
              value={yourJob}
              onChange={YourJobHandler}
            />
          </div>
          <div>
            <h3>Company/Institute</h3>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={companyNameHandler}
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              type="date"
              placeholder="Company Name"
              value={date}
              onChange={dateHandler}
            />
          </div>
          <div>
            <h3>About Your Work You Have Done</h3>
            <input
              type="text"
              placeholder="Write About Your Work"
              value={keyPoint}
              onChange={keyPointHandler}
            />
            <button onClick={addKeyPointHandler}>Add</button>
          </div>
          <div>
            <h3>Course</h3>
            <input
              type="text"
              placeholder="Write here the course"
              value={course}
              onChange={courseHandler}
            />
          </div>
          <div>
            <h3>University</h3>
            <input
              type="text"
              placeholder="Write university/college name"
              value={university}
              onChange={universityHandler}
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div>
            <h3>Contact no</h3>
            <input
              type="number"
              placeholder="Enter Your Number"
              value={contactNo}
              onChange={contactNoHandler}
            />
          </div>
          <div>
            <h3>Location</h3>
            <input
              type="text"
              placeholder="Enter Your Location"
              value={location}
              onChange={locationHandler}
            />
          </div>
          <div>
            <h3>LinkedIn</h3>
            <input
              type="text"
              placeholder="Enter Your LinkedIn id"
              value={linkedIn}
              onChange={linkedInHandler}
            />
          </div>

          <button
            onClick={() => {
              setPrint(true);
              setTimeout(() => {
                window.print();
              }, 100);
            }}
            className="print-btn"
          >
            Save as Pdf
          </button>
        </div>
      )} */}
      {!print && (
        <div className="btn-section">
          <div className="single-btn-area" id="single-btn">
            <button
              onClick={() => {
                setShowComponent("info");
              }}
            >
              Personal Information
            </button>
          </div>
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("experience");
              }}
            >
              Experience
            </button>
          </div>{" "}
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("education");
              }}
            >
              Education
            </button>
          </div>{" "}
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("contactInfo");
              }}
            >
              Contact Info
            </button>
          </div>{" "}
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("projects");
              }}
            >
              Projects
            </button>
          </div>{" "}
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("achievements");
              }}
            >
              Achievements
            </button>
          </div>{" "}
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("skills");
              }}
            >
              Skills
            </button>
          </div>{" "}
          <div className="single-btn-area">
            <button
              onClick={() => {
                setShowComponent("preview");
              }}
            >
              Preview
            </button>
          </div>{" "}
          <button
            onClick={() => {
              setPrint(true);
              setTimeout(() => {
                window.print();
              }, 100);
            }}
            className="print-btn"
          >
            Save as Pdf
          </button>
          {/* <button
          onClick={() => {
            setShowComponent("education");
          }}
        >
          Education
        </button>
        <button
          onClick={() => {
            setShowComponent("experience");
          }}
        >
          Experience
        </button>
        <button>Projects</button>
        <button>Achievements</button>
        <button>Skills</button>
        <button
          onClick={() => {
            setShowComponent("preview");
          }}
        >
          Preview
        </button> */}
        </div>
      )}

      <div className="right-edit-area">
        {showComponent === "preview" && (
          <Resume
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
            print={print}
            email={email}
            contactNo={contactNo}
            location={location}
            linkedIn={linkedIn}
            imageUrl={imageUrl}
            skillData={skillData}
            projectsData={projectsData}
            achievement={achievement}
            studyPeriod={studyPeriod}
          />
        )}
        {showComponent === "info" && (
          <PersonalInfo
            name={name}
            nameHandler={nameHandler}
            jobRoleHandler={jobRoleHandler}
            jobRole={jobRole}
            setImageUrl={setImageUrl}
            intro={intro}
            introHandler={introHandler}
          />
        )}
        {showComponent === "education" && (
          <Education
            course={course}
            courseHandler={courseHandler}
            university={university}
            universityHandler={universityHandler}
            studyPeriod={studyPeriod}
            studyPeriodHandler={studyPeriodHandler}
          />
        )}
        {showComponent === "experience" && (
          <Experience
            workExperience={workExperience}
            workExperienceHandler={workExperienceHandler}
            yourJob={yourJob}
            YourJobHandler={YourJobHandler}
            companyName={companyName}
            companyNameHandler={companyNameHandler}
            date={date}
            dateHandler={dateHandler}
            keyPoint={keyPoint}
            keyPointHandler={keyPointHandler}
            addKeyPointHandler={addKeyPointHandler}
          />
        )}
        {showComponent === "contactInfo" && (
          <ContactInfo
            email={email}
            emailHandler={emailHandler}
            contactNo={contactNo}
            contactNoHandler={contactNoHandler}
            location={location}
            locationHandler={locationHandler}
            linkedIn={linkedIn}
            linkedInHandler={linkedInHandler}
          />
        )}
        {showComponent === "skills" && (
          <Skills
            skill={skill}
            skillHandler={skillHandler}
            addSkillHandler={addSkillHandler}
            skillData={skillData}
          />
        )}
        {showComponent === "projects" && (
          <Projects
            projects={projects}
            projectsHandler={projectsHandler}
            addProjects={addProjects}
            projectsData={projectsData}
          />
        )}
        {showComponent === "achievements" && (
          <Achievement
            achievement={achievement}
            achievementHandler={achievementHandler}
          />
        )}
      </div>
    </div>
  );
}

export default App;
