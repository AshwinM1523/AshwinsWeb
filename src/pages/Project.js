import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import CoBuild from "../assets/img/CoBuild.jpg";
import avatarImg from "../assets/img/githubAvatar.jpg";
import Connect from "../assets/img/connect.jpeg";
import Forkify from "../assets/img/forkify.jpg";
import Mapty from "../assets/img/mapty.jpg";
import Wedding from "../assets/img/wedding.jpg";
import App from "../assets/img/app.jpg";

export const Project = () => {
  return (
    <div
      className="row"
      style={{
        padding: "1rem",
        background: "#1c1c1e",
        borderRadius: "30px",
        marginLeft: "1rem",
        marginRight: "1rem",
        textAlign: "left",
      }}
    >
      <h1
        style={{
          marginBottom: "1.5rem",
          paddingLeft: "1.5rem",
          textAlign: "center",
        }}
      >
        Projects
      </h1>
      <ProjectCard
        title={"Article Classification"}
        imgUrl={Mapty}
        description={
          "Implementation from scratch of Gaussian Naive Bayes and Naive Bayes for the classification of articles"
        }
        year={2022}
        avatar={avatarImg}
        name={"Ashwin Mallik"}
        role={"Developer"}
        projectLink={
          "https://github.com/AshwinM1523/BBC-Article-Classification"
        }
      />
      <ProjectCard
        title={"Connect"}
        imgUrl={Connect}
        description={
          "A Platform That Allows Users To Dub Videos With The Power Of AI"
        }
        year={2023}
        avatar={avatarImg}
        name={"Ashwin Mallik"}
        role={"Full Stack Developer (Co-Partner)"}
      />
      <ProjectCard
        title={"CoBuild"}
        imgUrl={CoBuild}
        description={
          "A Revoluntionary Platform That Enhances The Software Interview Process"
        }
        year={2023}
        avatar={avatarImg}
        name={"Ashwin Mallik"}
        role={"Full Stack Developer (Team of 7)"}
        projectLink={"https://github.com/AshwinM1523/CoBuild"}
      />
      <ProjectCard
        title={"UofT Course App"}
        imgUrl={App}
        description={
          "A Mobile App That Allows Students To Track Courses And Plan Their Schedules"
        }
        year={2023}
        avatar={avatarImg}
        name={"Ashwin Mallik"}
        role={"Scrum Master and Full Stack Developer (Team of 5)"}
        projectLink={
          "https://github.com/AshwinM1523/Uoft-Course-and-Timetable-Builder"
        }
      />
      <ProjectCard
        title={"Wedding Website (Private)"}
        imgUrl={Wedding}
        description={
          "Wedding Website For A Customer That Allows Them To Track RSVPs And Other Information"
        }
        year={2022}
        avatar={avatarImg}
        name={"Ashwin Mallik"}
        role={"Full Stack Developer (Co-Partner)"}
      />
      <ProjectCard
        title={"Forkify"}
        imgUrl={Forkify}
        description={
          "A Platform That Allows Users To Search And Create Recipes"
        }
        year={2022}
        avatar={avatarImg}
        name={"Ashwin Mallik"}
        role={"Developer"}
        projectLink={
          "https://github.com/AshwinM1523/forkify-course-project-ashwin"
        }
      />
    </div>
  );
};
