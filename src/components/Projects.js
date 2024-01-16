import { Col, Container, Row, TabContainer, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/calculator.png";
import projImg2 from "../assets/img/etchsketch.png";
import projImg3 from "../assets/img/tictactoe.png";
import projImg1 from "../assets/img/pynqedge.png";
import projImg5 from "../assets/img/project1.png";
import projImg6 from "../assets/img/website.png";

export const Projects = () => { 

    const projects = [
        {
            title: "PYNQ FPGA - Edge Detection",
            desciption: "",
            imgUrl: projImg1,
            projectUrl: ""
        },
        {
            title: "Etch-a-Sketch",
            desciption: "",
            imgUrl: projImg2,
            projectUrl: "https://rileymci.github.io/Etch-a-Sketch/",

        },
        {
            title: "Tic Tac Toe",
            desciption: "",
            imgUrl: projImg3,
            projectUrl: "https://rileymci.github.io/TicTacToe/",
        },
        {
            title: "Calculator",
            desciption: "",
            imgUrl: projImg4,
            projectUrl: "https://rileymci.github.io/A-Simple-Calculator/",
        },
        {
            title: "Motor Embedded System",
            desciption: "",
            imgUrl: projImg5,
        },
        {
            title: "React Website Portfolio",
            desciption: "",
            imgUrl: projImg6,
            projectUrl: "https://github.com/rileymci/ReactPersonalPortfolio/",
            
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}