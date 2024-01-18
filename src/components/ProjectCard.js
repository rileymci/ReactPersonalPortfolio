import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, projectUrl, download = false}) => {

    if(download){
        return (
            <Col sm={6} md={4}>
                <a href={projectUrl} download="RileyMcilwainThesis.pdf" target="_blank"><div className="proj-imgbx">
                    <img src={imgUrl}/>
                    <div className="proj-txtx">
                    <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div></a>
            </Col>
        )
    }
    else{
        return (
            <Col sm={6} md={4}>
                <a href={projectUrl} target="_blank"><div className="proj-imgbx">
                    <img src={imgUrl}/>
                    <div className="proj-txtx">
                    <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div></a>
            </Col>
        )
    }

}