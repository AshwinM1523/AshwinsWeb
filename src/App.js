import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { useRef } from "react";

function App() {
  let aboutSection = useRef(null);
  let projectSection = useRef(null);
  let contactSection = useRef(null);

  return (
    <div className="App">
      <NavBar
        aboutRef={aboutSection}
        projectRef={projectSection}
        contactRef={contactSection}
      />
      <Banner />
      <div ref={aboutSection}>
        <About />
      </div>
      <div ref={projectSection}>
        <Project />
      </div>
      <br />
      <div ref={contactSection}>
        <Contact />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
