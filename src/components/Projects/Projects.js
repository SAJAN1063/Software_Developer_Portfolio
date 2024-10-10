import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HOTEL from "../../Assets/Projects/HOTEL.png";
import ATTENDANCE from "../../Assets/Projects/ATTENDANCE.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HOTEL}
              isBlog={false}
              title="Hotel Management System"
              description="Built a Hotel Management System using the MERN stack (React, Node.js, MongoDB, and Express.js), implementing key features for both frontend and backend. Integrated MongoDB for scalable data management and collaborated on designing user-friendly interface."
              ghLink="https://github.com/SAJAN1063/MERNHotelBooking-Final-main"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATTENDANCE}
              isBlog={false}
              title="Fingerprint Attendance System using Arduino IDE"
              description="Integrated fingerprint sensors with Arduino for real-time attendance, and designed a user interface to display records with an option to export data to Excel."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
