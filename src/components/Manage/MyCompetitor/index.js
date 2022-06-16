import React from "react";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import CardTeam from "./CardTeam";

export default function MyCompetitor() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Doi da tao</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Dang tham gia</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Container>
                <Row>
                  <CardTeam />
                  <CardTeam />
                  <CardTeam />
                  <CardTeam />
                  <CardTeam />
                  <CardTeam />
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="second">noi dung 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
