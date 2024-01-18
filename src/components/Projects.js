import { Col, Container, Row, TabContainer, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/calculator.png";
import projImg2 from "../assets/img/etchsketch.png";
import projImg3 from "../assets/img/tictactoe.png";
import projImg1 from "../assets/img/pynqedge.png";
import projImg5 from "../assets/img/project1.png";
import projImg6 from "../assets/img/website.png";
import projImg7 from "../assets/img/movielibrary2.png";
import projImg8 from "../assets/img/flyingpost.png";
import projImg9 from "../assets/img/construction.png";
import ThesisDoc from '../assets/thesis/RileyMcilwainFinalThesisReport.pdf'

export const Projects = () => { 

    const projects1 = [
        {
            title: "PYNQ FPGA - Edge Detection Thesis",
            desciption: "",
            imgUrl: projImg1,
            projectUrl: ThesisDoc,
            download: true
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

    const projects2 = [
        {
            title: "CAB301 C# Movie Library",
            desciption: "",
            imgUrl: projImg7,
            projectUrl: "https://github.com/rileymci/CAB301-Movie-Library/"
        },
        {
            title: "CAB201 Flying Postman Pat",
            desciption: "",
            imgUrl: projImg8,
            projectUrl: "https://github.com/rileymci/Flying-Postman-Pat",

        },
        {
            title: "Coming Soon",
            desciption: "",
            imgUrl: projImg9,
            
        },
        {
            title: "Coming Soon",
            desciption: "",
            imgUrl: projImg9,
            
        },
        {
            title: "Coming Soon",
            desciption: "",
            imgUrl: projImg9,
        },
        {
            title: "Coming Soon",
            desciption: "",
            imgUrl: projImg9,
            
            
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
                                    projects1.map((project, index) => {
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
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    projects2.map((project, index) => {
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
                        <Tab.Pane eventKey="third">Coming Soon.</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}