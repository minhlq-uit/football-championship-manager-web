import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import LeagueItem from "./LeagueItem";
import './myleague.scss'

export default function MyLeague() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Giai dau da tao</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Dang tham gia</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content id="list-league">
            <Tab.Pane eventKey="first">
              <LeagueItem />
              <LeagueItem />
            </Tab.Pane>
            <Tab.Pane eventKey="second">noi dung 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
