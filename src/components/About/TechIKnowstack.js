import React from "react";
import { Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiReact, DiMongodb, DiPython } from "react-icons/di";
import {
  SiGulp,
  SiPug,
  SiTypescript,
  SiVuedotjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

import Icontitle from "./Icontitle";

const techStack = [
  { icon: CgCPlusPlus, tooltip: "C++ - Programming Language" },
  { icon: DiPython, tooltip: "Python - Programming Language" },
  { icon: DiReact, tooltip: "React - JavaScript Library" },
  { icon: SiVuedotjs, tooltip: "Vue.js - JavaScript Framework" },
  { icon: DiMongodb, tooltip: "MongoDB - NoSQL Database" },
  { icon: SiGulp, tooltip: "Gulp - Task Runner" },
  { icon: SiPug, tooltip: "Pug - Template Engine" },
  { icon: SiTypescript, tooltip: "TypeScript - Superset of JavaScript" },
  { icon: SiNextdotjs, tooltip: "Next.js - React Framework" },
  { icon: SiPostgresql, tooltip: "PostgreSQL - SQL Database" },
];

function TechIKnowstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Icontitle key={index} icon={tech.icon} tooltipText={tech.tooltip} />
      ))}
    </Row>
  );
}

export default TechIKnowstack;
