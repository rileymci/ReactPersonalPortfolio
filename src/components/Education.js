import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import qut from "../assets/img/bannerq.png";
import rochedale from "../assets/img/rochey.jpg";
import rochedale2 from "../assets/img/rochedaleban.jpg";
import colorSharp from "../assets/img/color-sharp.png"



export const Education = () => {


    return(
        <section className="education" id="education">
        <Container>
        <div className="education-bx">
        <h2>Education</h2>
        <Carousel className="education-slider">
                <Carousel.Item interval={3000}>
                    <img style={{height:'50vh'}}
                    className="d-block w-100" 
                    src={qut}
                    />
                    <Carousel.Caption className="education-caption">
                        <h3>Queensland University of Technology</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img style={{height:'50vh'}}
                    className="d-block w-100" 
                    src={rochedale2}
                    />
                    <Carousel.Caption className="education-caption">
                        <h3>Rochedale State High School</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            </Container>
            <img className="background-image-left2" src={colorSharp}></img>
        </section>
    )
}