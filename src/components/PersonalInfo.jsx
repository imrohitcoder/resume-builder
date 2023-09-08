import React from "react";

const PersonalInfo = ({
  jobRole,
  jobRoleHandler,
  nameHandler,
  setImageUrl,
  name,
  intro,
  introHandler,
}) => {
  return (
    <div>
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
        <h3 className="name-heading">Enter your name</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={nameHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">Job Role</h3>
        <input
          type="text"
          className="skill-input"
          placeholder="Job Role"
          value={jobRole}
          onChange={jobRoleHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">About Yourself</h3>
        <textarea
          style={{ height: "6rem" }}
          name=""
          id="text-area"
          cols="20"
          rows="5"
          className="skill-input"
          onChange={introHandler}
          value={intro}
          placeholder="Write About Yourself"
        ></textarea>
      </div>
    </div>
  );
};

export default PersonalInfo;
