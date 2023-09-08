import React from "react";

const Projects = ({ projects, projectsHandler, addProjects, projectsData }) => {
  return (
    <div>
      <div>
        <h3 className="name-heading">PROJECTS</h3>
        {projectsData?.length > 0 && (
          <div className="skill-main">
            {projectsData?.map((s, index) => {
              return (
                <div key={index}>
                  <h4>{s}</h4>
                </div>
              );
            })}
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="Add Projects"
            value={projects}
            onChange={projectsHandler}
            className="skill-input"
            onKeyUp={(e) => {
              if (projects && e.key === "Enter") {
                addProjects();
              }
            }}
          />
          <button className="add-btn" onClick={addProjects}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
