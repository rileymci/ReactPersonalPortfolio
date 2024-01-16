import { Col, Container, Row, TabContainer, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/tba.png";
import projImg2 from "../assets/img/tba.png";
import projImg3 from "../assets/img/tba.png";
import projImg4 from "../assets/img/pynq.jpg";

export const Projects = () => { 

    const projects = [
        {
            title: "Project Name",
            desciption: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Project Name",
            desciption: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Project Name",
            desciption: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Project Name",
            desciption: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Project Name",
            desciption: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Project Name",
            desciption: "Design & Development",
            imgUrl: projImg3,
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