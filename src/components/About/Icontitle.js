import React from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const Icontitle = ({ icon: Icon, tooltipText }) => (
  <OverlayTrigger placement="top" overlay={<Tooltip>{tooltipText}</Tooltip>}>
    <Col xs={4} md={2} className="tech-icons">
      <Icon />
    </Col>
  </OverlayTrigger>
);

export default Icontitle;
