import React from "react";
import { useState, useEffect } from "react";
import { Modal, Container, Table, Button, Form } from "react-bootstrap";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { updateParameter, getParameterById } from "../../redux/features/parameterSlice";

export default function Setting() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  //
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  //
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [minPlayerOfTeam, setMinPlayerOfTeam] = useState();
  const [minAge, setMinAge] = useState();
  // list priority
  const listPriority = [
    {
      id: "point",
      name: "Điểm số",
    },
    {
      id: "gd",
      name: "Hiệu số",
    },
    {
      id: "goal_away",
      name: "Bàn thắng sân khách",
    },
    {
      id: "competitor",
      name: "Kết quả đối kháng",
    },
  ];

  useEffect(() => {
    dispatch(getParameterById({parameterId: '62a410ce7b4c32b6a6636cfa'}))
    dispatch(getParameterById({parameterId: '62a410f07b4c32b6a6636cfe'}))
  }, [])

  const dispatch = useDispatch();
  const { parameterMinAge, parameterMinPlayerOfTeam } = useSelector(state => state.parameter)
  useEffect(() => {
    if(parameterMinAge) {
      setMinAge(parameterMinAge)
    }
  }, [parameterMinAge])
  useEffect(() => {
    if(parameterMinPlayerOfTeam) {
      setMinPlayerOfTeam(parameterMinPlayerOfTeam)
    }
  }, [parameterMinPlayerOfTeam])
  useEffect(() => {
    dispatch(
      updateParameter({
        parameterId: "62a410f07b4c32b6a6636cfe",
        nameParameter: "minPlayerOfTeam",
        value: minPlayerOfTeam,
      })
    );
  }, [minPlayerOfTeam]);
  useEffect(() => {
    dispatch(
      updateParameter({
        parameterId: "62a410ce7b4c32b6a6636cfa",
        nameParameter: "minAge",
        value: minAge,
      })
    );
  }, [minAge]);
  const handleUpdate1 = () => {
    handleClose1()
  }
  return (
    <Container fluid>
      <h1 className="pt-3 mb-5">Thay đổi tham số</h1>

      <h2>
        Qui định hồ sơ đội bóng
        <i className="fa-solid fa-pencil ms-2" onClick={handleShow1}></i>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tuổi tối thiểu</th>
            <th>Tuổi tối đa</th>
            <th>Số lượng cầu thủ tối thiểu</th>
            <th>Số lượngầu thủ tối đa</th>
            <th>Cầu thủ nước ngoài tối đa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{minAge}</td>
            <td>40</td>
            <td>{minPlayerOfTeam}</td>
            <td>22</td>
            <td>3</td>
          </tr>
        </tbody>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Thay đổi qui định hồ sơ đội bóng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tuổi tối thiểu</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={minAge}
                  onChange={(e) => setMinAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tuổi tối đa</Form.Label>
                <Form.Control type="number" defaultValue="40" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Số lượng cầu thủ tối thiểu</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={minPlayerOfTeam}
                  onChange={(e) => setMinPlayerOfTeam(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>số lượng cầu thủ tối đa</Form.Label>
                <Form.Control type="number" defaultValue="22" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cầu thủ nước ngoài tối đa</Form.Label>
                <Form.Control type="number" defaultValue="3" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleUpdate1}>
              Cập nhật
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>

      <h2>
        Qui định bàn thắng
        <i className="fa-solid fa-pencil ms-2" onClick={handleShow2}></i>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Số lượng các loại bàn thắng</th>
            <th>Thời điểm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>0 - 90</td>
          </tr>
        </tbody>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Qui định bàn thắng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Số lượng các loại bàn thắng</Form.Label>
                <Form.Control type="number" defaultValue="3" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Thời điểm</Form.Label>
                <Form.Control type="number" defaultValue="0" />
                <Form.Control type="number" defaultValue="90" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleClose2}>
              Cập nhật
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>

      <h2>
        Qui định về điểm số
        <i className="fa-solid fa-pencil ms-2" onClick={handleShow3}></i>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Thắng</th>
            <th>Hòa</th>
            <th>Thua</th>
            <th>Thứ tự ưu tiên</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>2</td>
            <td>0</td>
            <td>
              {/* <DragDropContext>
                <Droppable droppableId="characters">
                  {(provided) => {
                    <ul
                      className="characters"
                      {...provided.droppableProps}
                      innerRef={provided.innerRef}
                    >
                      {listPriority.map((item, index) => {
                        return (
                          <li>
                            <Button
                              variant="info"
                              className="me-1 ms-1"
                              key={item.id}
                            >
                              {item.name}
                            </Button>
                          </li>
                        );
                      })}
                    </ul>;
                  }}
                </Droppable>
              </DragDropContext> */}
            </td>
          </tr>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
              <Modal.Title>Qui định bàn thắng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Thắng</Form.Label>
                  <Form.Control type="number" defaultValue="3" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Hòa</Form.Label>
                  <Form.Control type="number" defaultValue="1" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Thua</Form.Label>
                  <Form.Control type="number" defaultValue="0" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Thứ tự ưu tiên</Form.Label>
                  <Form.Control type="number" defaultValue="0" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose3}>
                Đóng
              </Button>
              <Button variant="primary" onClick={handleClose3}>
                Cập nhật
              </Button>
            </Modal.Footer>
          </Modal>
        </tbody>
      </Table>
      <Button href="/">Quay về trang chủ</Button>
    </Container>
  );
}
