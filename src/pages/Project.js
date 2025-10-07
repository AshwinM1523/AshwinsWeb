import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import CoBuild from "../assets/img/CoBuild.jpg";
import B58MeatBoy from "../assets/img/B58MeatBoy.png";
import ModelChoosing from "../assets/img/ModelChoosing.png";
import Mapty from "../assets/img/mapty.jpg";
import Wedding from "../assets/img/wedding.jpg";
import App from "../assets/img/app.jpg";

export const Project = () => {
  const projects = [
    {
      title: "CoBuild",
      subtitle: "Recruiting Board Application",
      imgUrl: CoBuild,
      description:
        "A centralized job application board with integrated coding assessments and AI-powered code evaluation using fine-tuned OpenAI models.",
      impact: "Enhanced candidate evaluation with complexity and runtime analysis",
      technologies: ["React Native", "MongoDB", "AWS S3", "OpenAI", "AES-256"],
      projectLink: "https://github.com/AshwinM1523/CoBuild",
      featured: true,
    },
    {
      title: "Courseify",
      subtitle: "University Management App",
      imgUrl: App,
      description:
        "Mobile app for UofT students to plan and manage course enrollment with automated schedule generation and prerequisite tracking.",
      impact: "Streamlined course planning for students across 80+ courses",
      technologies: ["Android Studio", "Java", "Firebase", "XML"],
      projectLink: "https://github.com/AshwinM1523/Uoft-Course-and-Timetable-Builder",
      featured: true,
    },
    {
      title: "Super Meat Boy",
      subtitle: "Assembly Platformer Game",
      imgUrl: B58MeatBoy,
      description:
        "Recreation of the classic Super Meat Boy platformer game built entirely in assembly language, featuring physics-based movement and challenging level design.",
      impact: "Built a fully functional platformer using low-level assembly",
      technologies: ["Assembly", "x86", "Game Development"],
      projectLink: "https://www.youtube.com/watch?v=ea1vce_pjGo",
      featured: false,
    },
    {
      title: "Article Classification",
      subtitle: "Machine Learning Project",
      imgUrl: Mapty,
      description:
        "Implementation from scratch of Gaussian Naive Bayes classifier for BBC article categorization with high accuracy.",
      impact: "Achieved strong classification accuracy on news articles",
      technologies: ["Python", "NumPy", "Scikit-Learn"],
      projectLink: "https://github.com/AshwinM1523/BBC-Article-Classification",
      featured: false,
    },
    {
      title: "Wedding Website",
      subtitle: "Custom Event Platform",
      imgUrl: Wedding,
      description:
        "Custom wedding website with RSVP tracking, event management, and guest communication features for 200+ attendees.",
      impact: "Streamlined event coordination and guest management",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      featured: false,
    },
    {
      title: "Systolic Blood Pressure Analysis",
      subtitle: "Statistical Research Study",
      imgUrl: ModelChoosing,
      description:
        "Statistical case study examining lifestyle and demographic factors influencing Systolic Blood Pressure using data from 500 patients. Built interaction models with R that significantly improved predictive accuracy for cardiovascular risk assessment.",
      impact: "Identified key predictors for personalized cardiovascular care",
      technologies: ["R", "RMarkdown", "Statistical Modeling", "ggplot2"],
      projectLink: "https://github.com/AshwinM1523/Factors-on-Systolic-Blood-Pressure",
      featured: false,
    },
  ];

  return (
    <Container className="projects-refined">
      <div className="projects-header-refined">
        <h2 className="projects-main-title">Projects</h2>
        <p className="projects-subtitle">
          Showcasing full-stack applications, AI/ML solutions, and mobile development
        </p>
      </div>

      {/* All Projects - Grid Layout */}
      <Row className="all-projects-section">
        {projects.map((project, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-refined"
              style={{ pointerEvents: project.projectLink ? "auto" : "none" }}
            >
              <div className="project-card-refined compact">
                <div
                  className="project-image-compact"
                  style={{ backgroundImage: `url(${project.imgUrl})` }}
                ></div>
                <div className="project-body-compact">
                  <h4 className="project-title-compact">{project.title}</h4>
                  <p className="project-subtitle-compact">{project.subtitle}</p>
                  <p className="project-desc-compact">{project.description}</p>
                  <div className="project-tech-compact">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} className="tech-pill-compact">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
