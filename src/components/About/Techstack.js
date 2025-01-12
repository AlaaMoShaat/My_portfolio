import React from "react";
import { Row } from "react-bootstrap";

import { DiJavascript1, DiGit, DiJava, DiNodejs } from "react-icons/di";
import {
  SiLaravel,
  SiPhp,
  SiLivewire,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJquery,
  SiBootstrap,
} from "react-icons/si";
import Icontitle from "./Icontitle";

const techStack = [
  { icon: SiPhp, tooltip: "PHP - Server-side scripting language" },
  { icon: SiLaravel, tooltip: "Laravel - PHP Framework for Web Artisans" },
  { icon: SiLivewire, tooltip: "Livewire - Full-stack framework for Laravel" },
  { icon: DiJavascript1, tooltip: "JavaScript - Frontend scripting language" },
  { icon: DiNodejs, tooltip: "Node.js - Runtime Environment" },
  { icon: DiGit, tooltip: "Git - Version control system" },
  { icon: DiJava, tooltip: "Java - Object-oriented programming language" },
  { icon: SiHtml5, tooltip: "HTML5 - Standard markup language" },
  { icon: SiBootstrap, tooltip: "Bootstrap - CSS framework" },
  { icon: SiCss3, tooltip: "CSS3 - Cascading Style Sheets" },
  { icon: SiSass, tooltip: "Sass - CSS preprocessor" },
  { icon: SiJquery, tooltip: "jQuery - JavaScript library" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Icontitle key={index} icon={tech.icon} tooltipText={tech.tooltip} />
      ))}
    </Row>
  );
}

export default Techstack;
