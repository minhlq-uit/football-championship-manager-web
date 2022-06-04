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

export default function CreateTeam() {
  return (
    <Container className="pt-3">
        <h2> Tạo Đội đấu</h2>
      <Form>
        <Row>
          <Col sm="6" className="d-flex align-items-center">
          <Form.Group controlId="formFile">
              <Form.Label>ảnh đại diện</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
    
          </Col>
          <Col sm="6">
            <Form.Group controlId="formName">
              <Form.Label>Tên đội</Form.Label>
              <Form.Control type="text" placeholder="Tên đội" />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="text" placeholder="Số điện thoại" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="sportSelect">Chọn giới tính</Form.Label>
              <Form.Select id="sportSelect">
                <option>Nam</option>
                <option >Nữ</option>
              </Form.Select>
            </Form.Group>
            
            
          </Col>
        </Row>
        <hr />
        <Row>
            <Col>
            <Form.Group controlId="formRepresentative">
              <Form.Label>Tên người liên hệ</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formRepresentative">
              <Form.Label>Chọn độ tuổi</Form.Label>
              <Form.Select id="sportSelect">
                <option>--Vui lòng chọn--</option>
                <option >15-20</option>
                <option >20-25</option>
                <option >25-30</option>
                <option > > 30</option>
              </Form.Select>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formArea">
              <Form.Label>Khu vực hoạt động</Form.Label>
              <Form.Control type="text" placeholder="Nhập vị trí" />
            </Form.Group>
            </Col>
        </Row>
        <hr/>
        <Row>
        <Col  className="d-flex align-items-center">
            <Form.Group controlId="formFile">
              <Form.Label>Đồng phục 1</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
          <Col  className="d-flex align-items-center">
            <Form.Group controlId="formFile">
              <Form.Label>Đồng phục 2</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
          <Col  className="d-flex align-items-center">
            <Form.Group controlId="formFile">
              <Form.Label>Đồng phục 3</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>



        </Row>

        <hr/>
        <div class="form-group">
            <label for="GioiThieu">Giới thiệu</label>
            <textarea class="form-control" id="GioiThieu" rows="5"></textarea>
        </div>
       
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
