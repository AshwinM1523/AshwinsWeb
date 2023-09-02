import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/avatar.jpeg";
import pkmnVideo from "../assets/img/bike-ride-pokemon-emerald-pixel-moewalls-com.mp4";
import { Card } from "react-bootstrap"; // Assuming you have react-bootstrap installed
import Signiture from "../assets/img/signature.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Hello",
    "Hola",
    "Bonjour",
    "Namaste",
    "Salam",
    "Nín hǎo",
    "Konnichiwa",
  ];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <video autoPlay loop muted className="background-video">
        <source src={pkmnVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container className="banner-content" style={{ height: "50%" }}>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <Card
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                width: "65%",
                color: "white",
                borderRadius: "30px",
                padding: "1.5rem",
              }}
            >
              <Card.Body style={{ color: "#02040a" }}>
                <Card.Title
                  style={{
                    fontSize: "3rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Hello","Hola","Bonjour","Namaste","Salam","Nín hǎo","Konnichiwa", ]'
                >
                  <span className="wrap">{text}</span>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div>My name is Ashwin and Welcome to my Website</div>
                  <br />
                  <div>
                    I am currently a student at the University of Toronto
                    studying Computer Science, Statistics, and Biology.
                  </div>
                  <br />
                  <div>
                    I am situated in the Greater Toronto Area and I am currently
                    a full time student.
                  </div>
                </Card.Text>
                <img
                  src={Signiture}
                  alt="Signature"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
