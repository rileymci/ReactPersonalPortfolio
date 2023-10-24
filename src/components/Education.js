import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import qut from "../assets/img/bannerq.png";
import rochedale from "../assets/img/rochey.jpg";



export const Education = () => {


    return(
        <section className="education" id="education">
        <Container>
        <h2>Education</h2>
        <Carousel>
                <Carousel.Item interval={3000}>
                    <img style={{height:'50vh'}}
                    className="d-block w-100" 
                    src={qut}
                    />
                    <Carousel.Caption>
                        <h3>Queensland University of Technology</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img style={{height:'50vh'}}
                    className="d-block w-100" 
                    src={rochedale}
                    />
                    <Carousel.Caption>
                        <h3>Rochedale State Highschool</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
        </section>
    )
}