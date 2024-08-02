/* eslint-disable react/prop-types */
import "./experience.css";

function Experience({
  data,
  handleExperience,
  deleteExperience,
  addExperience,
}) {
  return (
    <section className="experience">
      <h2 className="blockTitle">Experience</h2>

      {data.experience.map((exp, index) => (
        <div className="content" key={exp.id}>
          {data.experience.length > 1 && (
            <div className="experienceTitle">
              <h3>{`Experience ${index + 1}`}</h3>
              <button
                aria-label="delete experience"
                onClick={() => {
                  deleteExperience(exp.id);
                }}
              >
                X
              </button>
            </div>
          )}

          <label htmlFor={`company${index}`}>
            <h3>Company Name</h3>
            <input
              type="text"
              name="company"
              id={`company${index}`}
              placeholder="Example: Ford"
              value={exp.company}
              onChange={(event) => handleExperience(event, exp.id)}
            />
          </label>

          <label htmlFor={`position${index}`}>
            <h3>Position Title</h3>
            <input
              type="text"
              name="position"
              id={`position${index}`}
              placeholder="Example: Assistant Manager"
              value={exp.position}
              onChange={(event) => handleExperience(event, exp.id)}
            />
          </label>

          <div className="jobDuration">
            <label htmlFor={`jobStart${index}`}>
              <h3>Start Date</h3>
              <input
                type="text"
                name="jobStart"
                id={`jobStart${index}`}
                placeholder="Example: 2023"
                value={exp.jobStart}
                onChange={(event) => handleExperience(event, exp.id)}
              />
            </label>

            <label htmlFor={`jobEnd${index}`}>
              <h3>End Date</h3>
              <input
                type="text"
                name="jobEnd"
                id={`jobEnd${index}`}
                placeholder="Example: 2024"
                value={exp.jobEnd}
                onChange={(event) => handleExperience(event, exp.id)}
              />
            </label>
          </div>

          <label htmlFor={`details${index}`}>
            <h3>Details</h3>
            <textarea
              type="text"
              name="details"
              id={`details${index}`}
              placeholder="Example: Worked on electronic systems of Ford vehicles"
              value={exp.details}
              onChange={(event) => handleExperience(event, exp.id)}
            />
          </label>
        </div>
      ))}
      <button
        aria-label="add experience"
        className="add-experience"
        onClick={addExperience}
      >
        + Experience
      </button>
    </section>
  );
}

export default Experience;
