import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/test.jpg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Electrical Engineer", "Web Developer", "Front-End Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200, 200);
    const period = 1500;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)


        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Riley Mcilwain! - `}<span className="wrap">{text}</span></h1>
                    <p>Undergraduate Computer Software Systems Engineer @ QUT</p>
                    <button><a href="mailto:rileymcilwain2000@gmail.com">Contact Me <ArrowRightCircle size={25} /></a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}