/* eslint-disable react/prop-types */
import "./education.css";

function Education({ data, handleEducation, deleteEducation, addEducation }) {
  return (
    <section className="education">
      <h2 className="blockTitle">Education</h2>

      {data.education.map((edu, index) => {
        return (
          <div className="content" key={edu.id}>
            {data.education.length > 1 && (
              <div className="educationTitle">
                <h3>{`Education ${index + 1}`}</h3>
                <button
                  aria-label="delete education"
                  onClick={() => {
                    deleteEducation(edu.id);
                  }}
                >
                  X
                </button>
              </div>
            )}
            <label htmlFor={`school${index}`}>
              <h3>School</h3>
              <input
                type="text"
                name="school"
                placeholder="Example: Yildiz Technical University"
                id={`school${index}`}
                value={edu.school}
                onChange={(event) => handleEducation(event, edu.id)}
              />
            </label>

            <label htmlFor={`degree${index}`}>
              <h3>Degree</h3>
              <input
                type="text"
                name="degree"
                placeholder="Example: Computer Engineering "
                id={`degree${index}`}
                value={edu.degree}
                onChange={(event) => handleEducation(event, edu.id)}
              />
            </label>

            <div className="degreeDuration">
              <label htmlFor={`degreeStart${index}`}>
                <h3>Start Date</h3>
                <input
                  type="text"
                  name="degreeStart"
                  placeholder="Example: 2023"
                  id={`degreeStart${index}`}
                  value={edu.degreeStart}
                  onChange={(event) => handleEducation(event, edu.id)}
                />
              </label>

              <label htmlFor={`degreeEnd${index}`}>
                <h3>End Date</h3>
                <input
                  type="text"
                  name="degreeEnd"
                  placeholder="Example: 2028"
                  id={`degreeEnd${index}`}
                  value={edu.degreeEnd}
                  onChange={(event) => handleEducation(event, edu.id)}
                />
              </label>
            </div>

            <label htmlFor={`gpa${index}`}>
              <h3>GPA</h3>
              <input
                type="text"
                name="gpa"
                placeholder="Example: 3.5"
                id={`gpa${index}`}
                value={edu.gpa}
                onChange={(event) => handleEducation(event, edu.id)}
              />
            </label>
          </div>
        );
      })}
      <button
        aria-label="add education"
        className="add-education"
        onClick={addEducation}
      >
        + Education
      </button>
    </section>
  );
}
export default Education;
