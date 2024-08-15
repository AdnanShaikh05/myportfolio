import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faNodeJs, faJava, faPhp, faEnvira } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faGears } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const skills = [
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "Bootstrap", icon: faBootstrap, color: "#563D7C" },
    { name: "NodeJS", icon: faNodeJs, color: "#68A063" },
    { name: "ExpressJS", icon: faCode, color: "#000000" }, 
    { name: "OOPS", icon: faCode, color: "#000000" }, 
    { name: "Restful API", icon: faGears, color: "#000000" }, 
    { name: "Core Java", icon: faJava, color: "#F80000" },
    { name: "Core PHP", icon: faPhp, color: "#787CB5" },
    { name: "MongoDB", icon: faEnvira, color: "#4DB33D" },
    { name: "MySQL", icon: faDatabase, color: "#00758F" },
  ];

  return (
    <Container className="my-5" style={{ textAlign: "center" }}>
      <h1><i className="fa-solid fa-lightbulb me-2"></i><FontAwesomeIcon className="me-2" />Skills</h1><hr/>
      <Row className="ms-1 me-1">
        {skills.map((skill) => (
          <Col md={3} className="mb-3 mt-3" key={skill.name}>
            <Card id="card">
              <Card.Body>
                <FontAwesomeIcon
                  icon={skill.icon}
                  size="2x"
                  className="mb-2"
                  style={{ color: skill.color}} // Apply color to icon
                />
                <b><Card.Title>{skill.name}</Card.Title></b>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
