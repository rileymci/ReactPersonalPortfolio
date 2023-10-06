import { Col, Container, Row } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import react from "../assets/img/physics.png"
import css from "../assets/img/css-3.png"
import html from "../assets/img/html.png"
import java from "../assets/img/java.png"
import c from "../assets/img/C.png"
import csharp from "../assets/img/c-sharp.png"
import js from "../assets/img/java-script.png"
import python from "../assets/img/python.png"
import vivado from "../assets/img/vivado.png"
import pynq from "../assets/img/pynq.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        },
    };


    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>These are a list of skills I use on a daily basis.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={react} alt="Image"/>
                                <h5>React Library</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image"/>
                                <h5>C Programming</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="Image"/>
                                <h5>C# Programming</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image"/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={vivado} alt="Image"/>
                                <h5>Vivado HLS</h5>
                            </div>
                            <div className="item">
                                <img src={pynq} alt="Image"/>
                                <h5>Pynq FPGAs</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
}