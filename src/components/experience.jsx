/* eslint-disable react/prop-types */
import "./experience.css";

function Experience({ data, handleExperience }) {
  return (
    <section className="experience">
      <h2 className="blockTitle">Experience</h2>
      <div className="content">
        <label htmlFor="company">
          <h3>Company Name</h3>
          <input
            type="text"
            name="company"
            id="company"
            value={data.experience[0].text}
            onChange={handleExperience}
          />
        </label>

        <label htmlFor="position">
          <h3>Position Title</h3>
          <input
            type="text"
            name="position"
            id="position"
            value={data.experience[1].text}
            onChange={handleExperience}
          />
        </label>

        <div className="jobDuration">
          <label htmlFor="jobStart">
            <h3>Start Date</h3>
            <input
              type="text"
              name="jobStart"
              id="jobStart"
              value={data.experience[2].text}
              onChange={handleExperience}
            />
          </label>

          <label htmlFor="jobEnd">
            <h3>End Date</h3>
            <input
              type="text"
              name="jobEnd"
              id="jobEnd"
              value={data.experience[3].text}
              onChange={handleExperience}
            />
          </label>
        </div>

        <label htmlFor="details">
          <h3>Details</h3>
          <textarea
            type="text"
            name="details"
            id="details"
            value={data.experience[4].text}
            onChange={handleExperience}
          />
        </label>
      </div>
    </section>
  );
}

export default Experience;
