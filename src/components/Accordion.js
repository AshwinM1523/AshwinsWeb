import React, { useState } from "react";

const dataCollection = [
  {
    question: "Current Courses",
    answer: [
      "CSCC73H3: Algorithm Design and Analysis",
      "CSCC24H3: Principles of Programming Languages",
      "CSCD84H3: Artificial Intelligence",
      "STAC67H3: Regression Analysis",
      "CSCB58H3: Computer Organization",
      "MATB42H3: Techniques of the Calculus of Several Variables II",
    ],
  },
  {
    question: "Taken Courses",
    answer: [
      "CSCC11H3: Introduction to Machine Learning and Data Mining",
      "CSCC43H3: Introduction to Databases",
      "STAB57H3: An Introduction to Statistics",
      "CSCC01H3: Introduction to Software Engineering",
      "CSCB63H3: Design and Analysis of Data Structures",
      "CSCB07H3: Software Design",
      "CSCB09H3: Software Tools and Systems Programming",
      "CSCB36H3: Introduction to the Theory of Computation",
      "STAB52H3: An Introduction to Probability",
      "MATB24H3: Linear Algebra II",
    ],
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div
        className="container"
        style={{
          textAlign: "left",
          background: "#1c1c1e",
          borderRadius: "30px",
          paddingLeft: "1rem",
          paddingTop: "0.5rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginLeft: "0.5rem", marginBottom: "1rem" }}>
            Courses
          </h1>
        </div>
        <div className="accordion__faq">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>
                <div>
                  {accordion === index ? (
                    <span className="verticle">-</span>
                  ) : (
                    <span className="horizental">+</span>
                  )}
                </div>
              </div>
              <div>
                <ul
                  className={accordion === index ? "active" : "inactive"}
                  style={{ paddingBottom: "1rem" }}
                >
                  {item.answer.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
