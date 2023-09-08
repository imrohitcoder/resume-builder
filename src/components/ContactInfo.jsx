import React from "react";

const ContactInfo = ({
  email,
  emailHandler,
  contactNo,
  contactNoHandler,
  location,
  locationHandler,
  linkedIn,
  linkedInHandler,
}) => {
  return (
    <div>
      {" "}
      <div>
        <h3 className="name-heading">Email</h3>
        <input
          className="skill-input"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">Contact no</h3>
        <input
          className="skill-input"
          type="number"
          placeholder="Enter Your Number"
          value={contactNo}
          onChange={contactNoHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">Location</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="Enter Your Location"
          value={location}
          onChange={locationHandler}
        />
      </div>
      <div>
        <h3 className="name-heading">LinkedIn</h3>
        <input
          className="skill-input"
          type="text"
          placeholder="Enter Your LinkedIn id"
          value={linkedIn}
          onChange={linkedInHandler}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
