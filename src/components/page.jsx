/* eslint-disable react/prop-types */
import "./page.css";
function Page({ data, img }) {
  return (
    <aside className="page">
      <div className="resume">
        <div className="cvinfo">
          <div className="cv-img-container">
            <img className="cv-img" src={img} />
          </div>
          <div className="cv-contact">
            <h2>Contact</h2>
            <div className="cv-contact-phone">
              <h4>Phone</h4>
              <div>{data.person[3].text}</div>
            </div>
            <div className="cv-contact-email">
              <h4>Email</h4>
              <div className="deneme">{data.person[2].text}</div>
            </div>
            <div className="cv-contact-address">
              <h4>Address</h4>
              <div>{data.person[4].text}</div>
            </div>
          </div>
          <div className="cv-education">
            <h2>Education</h2>
            {data.education.map((element) => (
              <div className="cv-education-degree" key={element.id}>
                <div className="cv-education-degree-dategpa">
                  {element.degreeStart && `${element.degreeStart}`}{" "}
                  {element.degreeEnd && ` - ${element.degreeEnd}`}
                  <div>{element.gpa && `GPA:${element.gpa}`}</div>
                </div>
                <h4>{element.degree}</h4>
                <div>{element.school}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cv-about">
          <div className="cv-about-name">
            <h3>{data.person[0].text + " " + data.person[1].text}</h3>
            <h4>{data.experience[0].position}</h4>
            <h5>{data.experience[0].details}</h5>
          </div>
          <ul className="cvexperience">
            <h3>Experience</h3>
            {data.experience.map((block) => (
              <li className="cvexperience-block" key={block.id}>
                <div className="cvexperience-block-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="cvexperience-duration">
                  {block.jobStart && `${block.jobStart}`}{" "}
                  {block.jobEnd && ` - ${block.jobEnd}`}
                </div>
                <div className="cvexperience-company">{block.company}</div>
                <div className="cvexperience-position">{block.position}</div>
                <div className="cvexperience-details">{block.details}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Page;
