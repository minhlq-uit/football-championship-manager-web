import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Modal,
} from "react-bootstrap";

export default function CreateLeague() {
  return (
    <Container className="pt-3">
      <Form>
        <Row>
          <Col sm="6" className="d-flex align-items-center">
            <Form.Group controlId="formFile">
              <Form.Label>Hình giải đấu</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group controlId="formName">
              <Form.Label>Tên giải đấu</Form.Label>
              <Form.Control type="text" placeholder="Tên giải đấu" />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="text" placeholder="Số điện thoại" />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Địa điểm</Form.Label>
              <Form.Control type="text" placeholder="Địa điểm" />
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="sportSelect">Chọn môn thi đấu</Form.Label>
              <Form.Select id="sportSelect">
                <option>Bóng đá</option>
                <option disabled>Khác</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Label>Hình thức thi đấu</Form.Label>
            <div className="d-flex justify-content-start">
              <Button className="me-3">Đấu vòng tròn</Button>
              <Button disabled>Loại trực tiếp</Button>
            </div>
            <Form.Group className="mt-3" controlId="numberTeams">
              <Form.Label>Số đội tham gia</Form.Label>
              <Form.Control type="number" defaultValue={2} />
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Điểm thắng</Form.Label>
                  <Form.Control type="number" defaultValue={3} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Điểm hòa</Form.Label>
                  <Form.Control type="number" defaultValue={1} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Điểm thua</Form.Label>
                  <Form.Control type="number" defaultValue={0} />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Số lượt đá vòng tròn</Form.Label>
              <br />
              <Button className="me-3" disabled>1 lượt</Button>
              <Button className="me-3">2 lượt</Button>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}
