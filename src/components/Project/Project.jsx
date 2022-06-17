import * as React from "react";
import "./Project.css";
import p1 from "../res/drawable/project1.jpg";
import { Button } from "@mui/material";
export default function Project() {
  const projectData = [
    {
      id: Math.random(),
      img: p1,
      title: "Full-stack Health Form",
      description: `MERN stacks were used to create this web application (Mongo
            Database, Express, React.js, and Node.js). This creates, reads,
            updates, and deletes health data from the MongoDB database.`,
      demo: "https://fanciful-liger-fbdcd4.netlify.app/",
      git: "https://github.com/JangManWol-source",
    },
    {
      id: Math.random(),
      img: p1,
      title: "Clone Jollibee Web App named Joellibee",
      description: `This website is a mockup of a Jollibee website. React.js and other react libraries were used to create this. This is just for instructional reasons.`,
      demo: "https://fanciful-liger-fbdcd4.netlify.app/",
      git: "https://github.com/JangManWol-source",
    },
    {
      id: Math.random(),
      img: p1,
      title: "ICCT Learning Management System (Thesis Project)",
      description: `This Android application was created with the Android Studio IDE and the Firebase database. Aims to assist the school in implementing their own School Learning Management System in the face of the epidemic. Edmodo, a learning management system software, influenced the majority of the app's functionality.`,
      demo: "https://fanciful-liger-fbdcd4.netlify.app/",
      git: "https://github.com/JangManWol-source",
    },
  ];
  return (
    <div className="holder">
      <div className="project-title">PROJECTS</div>
      <div className="project">
        {projectData.map((each) => (
          <div className="projects" key={each.id}>
            <div className="project-item">
              <img src={each.img} alt="" />
            </div>
            <div className="project_details">
              <h2>{each.title}</h2>
              <p>{each.description}</p>
              <Button variant="outlined">
                <a href={each.demo}>DEMO</a>
              </Button>
              <Button variant="contained">
                <a href={each.git}>GITHUB</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
