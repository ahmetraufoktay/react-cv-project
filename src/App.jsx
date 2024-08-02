import GeneralInformation from "./components/generalinformation.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Page from "./components/page.jsx";
import gru from "./assets/gru.jpg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const startingObject = {
  person: [
    { type: "firstname", text: "Felonius" },
    { type: "surname", text: "Gru, Sr." },
    { type: "email", text: "feloniusgrusr@minions.com" },
    { type: "number", text: "+1 (626) 584-5723" },
    { type: "address", text: "Albequerque, New Mexico" },
  ],
  education: [
    {
      id: uuidv4(),
      school: "Lycée Pas Bon",
      degree: "Mastery of Villainy",
      degreeStart: "2019",
      degreeEnd: "2023",
      gpa: "3.5",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      company: "Anti-Villian League (Currently)",
      position: "Agent",
      jobStart: "2024",
      jobEnd: "Continuing",
      details: "Tracks down the perpetrator who stole the secret laboratory",
    },
    {
      id: uuidv4(),
      company: "Mr. Gru's Old Fashioned Jelly (formerly)",
      position: "Jelly producer",
      jobStart: "2020",
      jobEnd: "2016",
      details: "Produced high quality jellies with the jelly gun",
    },
    {
      id: uuidv4(),
      company: "His Own Business",
      position: "Supervillian",
      jobStart: "2010",
      jobEnd: "2014",
      details: "Stole the moon",
    },
  ],
};

function App() {
  const [data, setData] = useState(startingObject);
  const [img, setImg] = useState(gru);

  function handlePerson(event) {
    const updatedPerson = data.person.map((element) => {
      if (element.type == event.target.name) {
        return { ...element, text: event.target.value };
      }
      return element;
    });
    setData({ ...data, person: updatedPerson });
  }

  function handleImg(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function deleteEducation(id) {
    const newEducation = data.education.filter((element) => element.id != id);
    setData({ ...data, education: newEducation });
  }

  function handleEducation(event, id) {
    const updatedEducation = data.education.map((element) => {
      if (element.id == id) {
        return { ...element, [event.target.name]: event.target.value };
      }
      return element;
    });
    setData({ ...data, education: updatedEducation });
  }

  function addEducation() {
    const updatedEducation = [
      ...data.education,
      {
        id: uuidv4(),
        school: "",
        degree: "",
        degreeStart: "",
        degreeEnd: "",
        gpa: "",
      },
    ];
    setData({ ...data, education: updatedEducation });
  }

  function deleteExperience(id) {
    const newExperience = data.experience.filter((element) => element.id != id);
    setData({ ...data, experience: newExperience });
  }

  function handleExperience(event, id) {
    const updatedExperience = data.experience.map((element) => {
      if (element.id == id) {
        return { ...element, [event.target.name]: event.target.value };
      }
      return element;
    });
    setData({ ...data, experience: updatedExperience });
  }

  function addExperience() {
    const updatedExperience = [
      ...data.experience,
      {
        id: uuidv4(),
        company: "",
        position: "",
        jobStart: "",
        jobEnd: "",
        details: "",
      },
    ];
    setData({ ...data, experience: updatedExperience });
  }

  return (
    <>
      <article>
        <nav>
          <h1>CV Builder</h1>
        </nav>
        <GeneralInformation
          data={data}
          handlePerson={handlePerson}
          handleImg={handleImg}
        />
        <Education
          data={data}
          handleEducation={handleEducation}
          deleteEducation={deleteEducation}
          addEducation={addEducation}
        />
        <Experience
          data={data}
          handleExperience={handleExperience}
          deleteExperience={deleteExperience}
          addExperience={addExperience}
        />
      </article>
      <Page data={data} img={img} />
    </>
  );
}

export default App;
