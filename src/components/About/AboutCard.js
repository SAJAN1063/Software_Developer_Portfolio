import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sajan Gupta </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am currently Pursuing B.tech Computer Science and Engineering in Specialization in AI and Robotics at VIT Chennai .
            <br />
            I have completed my Schooling from Sunbeam School Lahartara, Varanasi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media Management
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sajan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
