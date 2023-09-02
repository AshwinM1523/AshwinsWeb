import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import avatarImg from "../assets/img/IMG_3553.jpg";
import Accordion from "../components/Accordion";

export const About = () => {
  const programmingLanguages = [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "C++",
    "SQL",
  ];
  const frameworks = [
    "React",
    "NodeJS",
    "ExpressJS",
    "MUI and BootStrap",
    "Tensorflow",
    "Jupyter Notebooks",
  ];
  const tools = [
    "MongoDB",
    "Azure",
    "AWS",
    "Android Studio",
    "Latex",
    "Scikit-Learn",
  ];
  const Certifications = [
    "Azure Fundamentals",
    "Standford ML Specialization",
    "JavaScript Zero to Professional",
  ];
  return (
    <div>
      <Row style={{ padding: "1rem" }}>
        <Col lg={4} md={12} xs={12} className="mb-4">
          <div className="cardAboutOne">
            <img
              src={avatarImg}
              alt="Avatar"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
              }}
              class="rounded-circle"
            />
            <h4 style={{ color: "white", zIndex: 1, marginTop: "-5rem" }}>
              Student at the University of Toronto
            </h4>
          </div>
        </Col>
        <Col lg={8} md={12} xs={12} className="mb-2">
          <div
            className="gradient-bordered-card"
            style={{
              backgroundColor: "#191919",
              color: "white",
            }}
          >
            <Card.Body
              style={{
                textAlign: "center",
                padding: "2.5rem 1.2rem 3rem 1.2rem",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "2rem",
                }}
              >
                Hello, I'm Ashwin
              </Card.Title>
              <Card.Text style={{ marginTop: "1rem" }}>
                I am presently embarking on my third year of studying Computer
                Science at the University of Toronto. Currently, I am pursuing a
                specialization in Software Engineering, accompanied by a double
                minor in Statistics and Biology. My passion for learning drives
                me, and I hold a deep curiosity for the ever-evolving landscape
                of technology. This curiosity fuels my exploration of diverse
                software fields including full-stack development, machine
                learning, mobile application development, and software
                applications within the medical domain.
              </Card.Text>
              <Card.Text style={{ marginTop: "1rem" }}>
                Outside of my academic pursuits, I find great enjoyment in
                actively engaging with new people and spending quality time to
                my cherished family and friends. I'm an supporter of the
                football club Barcelona, and I love playing sports like soccer,
                basketball, and badminton. Additionally, I have a penchant for
                gaming, particularly enjoying titles such as Pokemon, Tetris,
                and strategy-based team games. My interests extend to travel and
                language acquisition; at present, I'm in the process of learning
                Nepali. Moreover, I am an active volunteer within my community,
                currently dedicating my time to the town of Ajax.
              </Card.Text>
            </Card.Body>
          </div>
        </Col>
      </Row>
      <Row style={{ padding: "1rem" }}>
        <Col lg={6} md={12} xs={12} className="mb-3">
          <div
            className="gradient-bordered-card"
            style={{ background: "#191919", overflow: "hidden" }}
          >
            <Card.Body
              style={{
                textAlign: "left",
                paddingTop: "2rem",
                color: "white",
              }}
            >
              <Card.Title style={{ textAlign: "center" }}>
                <h3>Work Experience</h3>
              </Card.Title>
              <Card.Text style={{}}>
                <div style={{ width: "90%", paddingLeft: "2.5rem" }}>
                  <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
                    Computer Science Co-op
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    Ontario Power Generation | January 2023 - April 2023
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    Fostered the development of a ticketing system web
                    application, comprising 3 different apps, which was launched
                    to all 10,000 employees. The project utilized PowerPlatform,
                    Azure, HTML, CSS, and the SendGrid API
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    Used Python and PowerShell scripts to automate tasks and
                    streamline work, including tasks such as system monitoring,
                    ticket assistance, and data manipulation.
                  </div>
                </div>
                <div style={{ paddingLeft: "1rem", marginTop: "1.5rem" }}>
                  <Row style={{ marginTop: "0.5rem" }}>
                    <Col lg={4} md={4} xs={4}>
                      <ul>
                        <li>Mobile Application Development</li>
                        <li>Microsoft Azure</li>
                      </ul>
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                      <ul>
                        <li>PowerShell</li>
                        <li>Microsoft Power Platform</li>
                      </ul>
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                      <ul>
                        <li>HTML CSS XAML</li>
                        <li>REST APIs</li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Card.Text>
            </Card.Body>
          </div>
        </Col>
        <Col lg={6} md={12} xs={12}>
          <Row>
            <Col lg={4} md={4} xs={6} className="mb-3">
              <div
                className="gradient-bordered-card"
                style={{
                  background: "#191919",
                  height: "300px",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      borderBottom: "2px solid white",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.8rem",
                    }}
                  >
                    Languages
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", paddingLeft: "1rem" }}>
                    {programmingLanguages.map((language, index) => (
                      <React.Fragment key={index}>
                        <div style={{ marginTop: "0.9rem" }}>{language}</div>
                      </React.Fragment>
                    ))}
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col lg={4} md={4} xs={6} className="mb-3">
              <div
                className="gradient-bordered-card"
                style={{
                  background: "#191919",
                  height: "300px",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      borderBottom: "2px solid white",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.8rem",
                    }}
                  >
                    Frameworks
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", paddingLeft: "1rem" }}>
                    {frameworks.map((frameworks, index) => (
                      <React.Fragment key={index}>
                        <div style={{ marginTop: "0.9rem" }}>{frameworks}</div>
                      </React.Fragment>
                    ))}
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col lg={4} md={4} xs={12}>
              <div
                className="gradient-bordered-card"
                style={{
                  background: "#191919",
                  height: "300px",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      borderBottom: "2px solid white",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.8rem",
                    }}
                  >
                    Tools
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", paddingLeft: "1rem" }}>
                    {tools.map((tool, index) => (
                      <React.Fragment key={index}>
                        <div style={{ marginTop: "0.9rem" }}>{tool}</div>
                      </React.Fragment>
                    ))}
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
          <Col
            lg={12}
            md={12}
            xs={12}
            style={{ marginTop: "1rem" }}
            className="mb-3"
          >
            <div
              className="gradient-bordered-card"
              style={{
                background: "#191919",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title style={{ paddingTop: "0.8rem" }}>
                  Certifications
                </Card.Title>
                <Card.Text
                  style={{
                    alignItems: "center",
                  }}
                >
                  <ul style={{ paddingBottom: "1.7rem" }}>
                    <li style={{ float: "left", margin: "0 10px" }}>
                      {Certifications[0]}
                    </li>
                    <li style={{ float: "left", margin: "0 10px" }}>
                      {Certifications[1]}
                    </li>
                    <li style={{ float: "left", margin: "0 10px" }}>
                      {Certifications[2]}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} xs={12}>
          <Accordion />
        </Col>
      </Row>
    </div>
  );
};
