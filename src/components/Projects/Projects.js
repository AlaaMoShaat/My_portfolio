import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fronEnd from "../../Assets/Projects/fronEnd.png";
import calculator from "../../Assets/Projects/calculator.png";
import News_Management_Project from "../../Assets/Projects/News_Management_Project.png";
import news from "../../Assets/Projects/news.png";
import vue from "../../Assets/Projects/vue.png";
import storeLaravel from "../../Assets/Projects/storeLaravel.png";
import sms from "../../Assets/Projects/sms.png";

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
              imgPath={news}
              isBlog={false}
              title="News"
              description="News Project using Laravel provides a user interface and an admin interface with new features and excellent control."
              ghLink="https://github.com/AlaaMoShaat/News-Laravel-Project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storeLaravel}
              isBlog={false}
              title="Car Store"
              description="Car rental Project using Laravel provides a user interface and an admin interface with new features and excellent control."
              ghLink="https://github.com/AlaaMoShaat/store-laravel-project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="School Management System Laravel"
              description="School Management System using Laravel provides a admin interface with new features and excellent control."
              ghLink="https://github.com/AlaaMoShaat/school-management-system-laravel"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News_Management_Project}
              isBlog={false}
              title="News Management"
              description="News Management Project using Laravel provides a admin interface with new features and excellent control."
              ghLink="https://github.com/AlaaMoShaat/News_Management_Project"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fronEnd}
              isBlog={false}
              title="Front End Pages"
              description="Many Front End Pages and Sites To Practice. HTML, CSS and JS."
              ghLink="https://github.com/AlaaMoShaat/Front-End-Challenges"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vue}
              isBlog={false}
              title="Vue Practices"
              description="A collection of ideas in one application using Vue.js."
              ghLink="https://github.com/AlaaMoShaat/vue-project"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator Next App"
              description="Calculator App Using Next.js."
              ghLink="https://github.com/AlaaMoShaat/calculator-react-app"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
