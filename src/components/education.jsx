/* eslint-disable react/prop-types */
import "./education.css";

function Education({ data, handleEducation }) {
  return (
    <section className="education">
      <h2 className="blockTitle">Education</h2>

      <div className="content">
        <label htmlFor="school">
          <h3>School</h3>
          <input
            type="text"
            name="school"
            id="school"
            value={data.education[0].text}
            onChange={handleEducation}
          />
        </label>

        <label htmlFor="degree">
          <h3>Degree</h3>
          <input
            type="text"
            name="degree"
            id="degree"
            value={data.education[1].text}
            onChange={handleEducation}
          />
        </label>

        <div className="degreeDuration">
          <label htmlFor="degreeStart">
            <h3>Start Date</h3>
            <input
              type="text"
              name="degreeStart"
              id="degreeStart"
              value={data.education[2].text}
              onChange={handleEducation}
            />
          </label>

          <label htmlFor="degreeEnd">
            <h3>End Date</h3>
            <input
              type="text"
              name="degreeEnd"
              id="degreeEnd"
              value={data.education[3].text}
              onChange={handleEducation}
            />
          </label>
        </div>

        <label htmlFor="location">
          <h3>Location</h3>
          <input
            type="text"
            name="location"
            id="location"
            value={data.education[4].text}
            onChange={handleEducation}
          />
        </label>
      </div>
    </section>
  );
}
export default Education;
