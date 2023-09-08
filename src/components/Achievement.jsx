import React from "react";

const Achievement = ({ achievement, achievementHandler }) => {
  return (
    <div>
      <div>
        <h3>ACHIEVEMENTS</h3>
        <textarea
          name=""
          id="text-area"
          cols="20"
          rows="5"
          onChange={achievementHandler}
          value={achievement}
          placeholder="What You Have Achieved"
        ></textarea>
      </div>
    </div>
  );
};

export default Achievement;
