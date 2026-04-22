import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/youtube.svg';
import ResumeDoc from '../assets/resume/RileyMcilwainResume2026.pdf'

export const NavBar = () => {
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }


    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h3>RM</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/riley-mcilwain-4081681b1/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/rileymci" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <a href={ResumeDoc} download="RileyMcilwainCV" target='blank'><button className="vvd"><span>Resume</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
