import GeneralInformation from "./components/generalinformation.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Page from "./components/page.jsx";
import "./App.css";
import { useState } from "react";

const startingObject = {
  person: [
    { type: "fullName", text: "Felonius Gru, Sr." },
    { type: "email", text: "feloniusgrusr@minions.com" },
    { type: "number", text: "+1 (626) 584-5723" },
    { type: "address", text: "Albequerque, New Mexico" },
  ],
  education: [
    { type: "school", text: "Lycée Pas Bon" },
    { type: "degree", text: "Mastery of Villainy" },
    { type: "degreeStart", text: "2019" },
    { type: "degreeEnd", text: "2023" },
    { type: "location", text: "French Alps" },
  ],
  experience: [
    { type: "company", text: "Anti-Villian League (Currently)" },
    { type: "position", text: "Agent" },
    { type: "jobStart", text: "2024" },
    { type: "jobEnd", text: "-" },
    {
      type: "details",
      text: "Tracks down the perpetrator who stole the secret laboratory",
    },
  ],
};

function App() {
  const [data, setData] = useState(startingObject);

  function handlePerson(event) {
    const updatedPerson = data.person.map((element) => {
      if (element.type == event.target.name) {
        return { ...element, text: event.target.value };
      }
      return element;
    });
    setData({ ...data, person: updatedPerson });
  }

  function handleEducation(event) {
    const updatedEducation = data.education.map((element) => {
      if (element.type == event.target.name) {
        return { ...element, text: event.target.value };
      }
      return element;
    });
    setData({ ...data, education: updatedEducation });
  }

  function handleExperience(event) {
    const updatedExperience = data.experience.map((element) => {
      if (element.type == event.target.name) {
        return { ...element, text: event.target.value };
      }
      return element;
    });
    setData({ ...data, experience: updatedExperience });
  }

  return (
    <>
      <article>
        <nav>
          <h1>CV Builder</h1>
        </nav>
        <GeneralInformation data={data} handlePerson={handlePerson} />
        <Education data={data} handleEducation={handleEducation} />
        <Experience data={data} handleExperience={handleExperience} />
      </article>
      <Page data={data} />
    </>
  );
}

export default App;
