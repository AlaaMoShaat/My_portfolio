import React from "react";
import { Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiDiscord,
  SiWindows,
} from "react-icons/si";
import Icontitle from "./Icontitle";

const tools = [
  { icon: SiWindows, tooltip: "Windows - Operating System" },
  { icon: SiVisualstudiocode, tooltip: "VS Code - Code Editor" },
  { icon: SiPostman, tooltip: "Postman - API Testing Tool" },
  { icon: SiGithub, tooltip: "GitHub - Version Control Hosting" },
  { icon: SiDiscord, tooltip: "Discord - Communication Platform" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Icontitle key={index} icon={tool.icon} tooltipText={tool.tooltip} />
      ))}
    </Row>
  );
}

export default Toolstack;
