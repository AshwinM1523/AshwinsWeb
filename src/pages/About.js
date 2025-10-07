import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import avatarImg from "../assets/img/IMG_3553.jpg";

export const About = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Capital One",
      period: "May 2025 – Aug 2025",
      description: "Migrated a high-traffic credit card REST API from Node.js to Go, cutting latency in half. Set up ElastiCache to handle over 5,000 requests per second and built a cross-regional AWS Lambda service using ALB and Route 53 for improved reliability.",
      tech: ["Go", "AWS Lambda", "ElastiCache", "Route 53"],
    },
    {
      role: "Software Engineer Intern",
      company: "BorderPass",
      period: "Jan 2025 – Apr 2025",
      description: "Built an AI-powered document parser using a fine-tuned OpenAI model that reduced lawyer review time by 70%. Created AWS Lambda workflows to automatically process incoming emails from S3 and developed full-stack visa application flows with Next.js and GraphQL.",
      tech: ["Node.js", "Python", "OpenAI", "Next.js", "GraphQL"],
    },
    {
      role: "Software Engineer Intern",
      company: "Capital One",
      period: "Sep 2024 – Dec 2024",
      description: "Developed an event-driven Slack bot on AWS Lambda that saves over 20 teams 8+ hours per week. Led our team to first place in the Capital One AI Hackathon, competing against 40+ teams across North America.",
      tech: ["Python", "AWS Lambda", "Slack API"],
    },
    {
      role: "Software Developer Intern",
      company: "Ontario Power Generation",
      period: "Jan 2023 – Apr 2023",
      description: "Created a PowerApps ticketing system with Azure Blob Storage that serves over 10,000 users. Built internal desktop tools using C# and XAML to streamline and automate the laptop setup process for new employees.",
      tech: ["PowerApps", "Azure", "C#", "XAML"],
    },
  ];

  const skills = {
    languages: ["Java", "Python", "C/C++", "GoLang", "JavaScript", "TypeScript", "SQL", "Ruby", "R"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "GraphQL", "Django", "Flask", "Spring Boot", "TensorFlow"],
    tools: ["AWS", "Docker", "Git", "Azure", "Jenkins", "Splunk", "CircleCI", "Postman", "MongoDB", "Firebase"],
  };

  return (
    <Container className="about-refined">
      {/* Hero Section */}
      <Row className="hero-section">
        <Col lg={4} md={12} className="hero-left">
          <div className="profile-card-refined">
            <div className="profile-image-container">
              <img src={avatarImg} alt="Ashwin Mallik" className="profile-img-refined" />
            </div>
            <h2 className="profile-name">Ashwin Mallik</h2>
            <p className="profile-title">Software Engineer</p>
            <p className="profile-education">Computer Science • UofT</p>
          </div>
        </Col>

        <Col lg={8} md={12} className="hero-right">
          <div className="intro-card-refined">
            <h3 className="intro-title">About Me</h3>
            <p className="intro-text">
              Fourth-year Computer Science student at the University of Toronto, specializing in
              Software Engineering with double minors in Statistics and Biology. Passionate about
              building scalable systems and solving complex technical challenges.
            </p>
            <p className="intro-text">
              Active in campus leadership across multiple student organizations, holding executive
              positions in computer science, data science, and health science clubs. Experienced in
              full-stack development, cloud infrastructure, AI/ML applications, and DevOps automation.
            </p>
          </div>
        </Col>
      </Row>

      {/* Experience Section */}
      <div className="section-refined">
        <h3 className="section-title-refined">Professional Experience</h3>
        <div className="experience-vertical">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card-timeline">
              <div className="exp-year">{exp.period}</div>
              <div className="exp-content">
                <div className="exp-title-row">
                  <h4 className="exp-role-timeline">{exp.role}</h4>
                  <span className="exp-company-link">
                    {exp.company} <span className="arrow">↗</span>
                  </span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tech-timeline">
                  {exp.tech.map((tech, i) => (
                    <Badge key={i} className="tech-badge-timeline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="section-refined">
        <h3 className="section-title-refined">Technical Skills</h3>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="skill-card-refined">
              <h4 className="skill-category-refined">Languages</h4>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <div className="skill-card-refined">
              <h4 className="skill-category-refined">Frameworks</h4>
              <div className="skill-tags">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <div className="skill-card-refined">
              <h4 className="skill-category-refined">Tools & Platforms</h4>
              <div className="skill-tags">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Extracurricular Section */}
      <div className="section-refined">
        <h3 className="section-title-refined">Leadership & Involvement</h3>
        <div className="extracurricular-grid">
          <div className="extracurricular-card">
            <div className="extracurricular-header">
              <div className="extracurricular-icon">💻</div>
              <div>
                <h4 className="extracurricular-title">AMACSS</h4>
                <p className="extracurricular-role">Director of Tech & Campus Life</p>
              </div>
            </div>
            <p className="extracurricular-description">
              Contributing to the development and maintenance of the AMACSS website, enhancing the digital presence for the Association of Math, Computer Science, and Statistics students.
            </p>
            <a
              href="https://www.amacss.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="extracurricular-link"
            >
              Visit Website <span className="arrow">↗</span>
            </a>
          </div>

          <div className="extracurricular-card">
            <div className="extracurricular-header">
              <div className="extracurricular-icon">📊</div>
              <div>
                <h4 className="extracurricular-title">DS3</h4>
                <p className="extracurricular-role">VP of Academics</p>
              </div>
            </div>
            <p className="extracurricular-description">
              Leading academic initiatives for the Data Science Society, creating and reviewing publications on data science topics to foster learning and collaboration.
            </p>
            <div className="extracurricular-links">
              <a
                href="https://ds3utsc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="extracurricular-link"
              >
                DS3 Website <span className="arrow">↗</span>
              </a>
              <a
                href="https://medium.com/@thedatasciencecube"
                target="_blank"
                rel="noopener noreferrer"
                className="extracurricular-link"
              >
                Medium Blog <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
