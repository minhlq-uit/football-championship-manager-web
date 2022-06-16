import React from "react";
import { Container, Card, Tabs, Tab } from "react-bootstrap";
import MyLeague from "./MyLeague";
import MyCompetitor from "./MyCompetitor";

export default function Manage() {
  return (
    <Container>
      <div className="banner">
        {/* <div className="user-info">
          <Card style={{ width: "300px" }}>
            <Card.Img variant="top" src="/images/logo.jpg" />
            <Card.Body>
              <Card.Text>Le Quang Minh</Card.Text>
              <Card.Text>19521836@gm.uit.edu.vn</Card.Text>
            </Card.Body>
          </Card>
        </div> */}
        <div className="menu mt-3">
          <Tabs
            defaultActiveKey="myleague"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="myleague" title="Quan li giai dau">
              <MyLeague />
            </Tab>
            <Tab eventKey="mycompetitor" title="Quan li doi hinh">
              <MyCompetitor />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
