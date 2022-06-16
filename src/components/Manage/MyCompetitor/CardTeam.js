import React from "react";
import { Col, Card, Button } from "react-bootstrap";
export default function CardTeam() {
  return (
    <Col md={6} lg={4}>
      <Card style={{ width: "16rem", marginTop: "2rem" }}>
        <Card.Img variant="top" src="/images/logo-mu.jpg" />
        <Card.Body>
          <Card.Title>Le Quang Minh</Card.Title>
          <Card.Text>
            <p>Ngay sinh 01/01/2001</p>
            <p>Loai cau thu: Trong nuoc(ngoai nuoc)</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
