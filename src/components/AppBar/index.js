import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Modal,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import { loginRequest, registerRequest } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function AppBar() {
  const dispatch = useDispatch();
  const { user, message, isUser } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [userCheck, setUserCheck] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  useEffect(() => {
    let getIsUser = JSON.parse(localStorage.getItem("isUser"));
    setUserCheck(getIsUser);
  }, []);
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };
  useEffect(() => {
    if (message === "login success") {
      toast.success("Đăng nhập thành công");
      localStorage.setItem("isUser", JSON.stringify(true));
      setUserCheck(true);
      handleClose();
    } else if (message === "Login failed") {
      toast.error("Đăng nhập không thành công");
      localStorage.setItem("isUser", JSON.stringify(false));
    } else if (message === "sign up success") {
      localStorage.setItem("isUser", JSON.stringify(true));
      toast.success("Đăng Kí thành công");
      setUserCheck(true);
      handleClose();
    } else if (message === "email already exist") {
      toast.error("Email đã tồn tại");
      localStorage.setItem("isUser", JSON.stringify(false));
    }
  }, [message]);
  const handleRegister = (e) => {
    console.log("email password", email, password);
    dispatch(registerRequest({ email, password }));
  };
  const handleLogout = () => {
    localStorage.setItem("isUser", JSON.stringify(false));
    setUserCheck(false);
  };
  return (
    <div id="AppBar">
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">Football Championship Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home">Giải đấu</Nav.Link>
              <Nav.Link href="#link">Đội thi đấu</Nav.Link> */}
              {userCheck ? (
                <>
                  <Nav.Link href="/account/create-team">
                    Tham gia giải đấu
                  </Nav.Link>
                  <Nav.Link href="/account/create-match-schedule">
                    Lịch thi đấu
                  </Nav.Link>
                  <Nav.Link href="/standings">Bảng xếp hạng</Nav.Link>
                  {/* <Nav.Link href="/all-player">Danh sách cầu thủ</Nav.Link>
                  <Nav.Link href="/list-player-goal">
                    Danh sách cầu thủ ghi bàn
                  </Nav.Link> */}
                  <NavDropdown title="Danh sách" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/all-player">
                    Danh sách cầu thủ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/list-player-goal">
                    Danh sách cầu thủ ghi bàn
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/all-club">
                      Danh sách câu lạc bộ
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/setting">Qui định</Nav.Link>
                </>
              ) : (
                <></>
              )}
              {!userCheck && (
                <Nav.Link href="" onClick={handleShow}>
                  Đăng nhập
                </Nav.Link>
              )}
              {userCheck && (
                <Nav.Link href="" onClick={handleLogout}>
                  Đăng xuất
                </Nav.Link>
              )}
              {/* <NavDropdown title="Le Quang Minh" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Quản lí giải đấu
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Quản lí đội
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Tabs
          defaultActiveKey="signin"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="signin" title="Signin">
            <Container>
              <Form>
                <Form.Group className="mb-3" controlId="email-login">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password-loginF">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex text-right mb-3">
                  <Button
                    variant="primary"
                    className="me-3"
                    onClick={handleSignIn}
                  >
                    Đăng nhập
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Đóng
                  </Button>
                </div>
              </Form>
            </Container>
          </Tab>
          {/* signup */}
          <Tab eventKey="siginup" title="Signup">
            <Container>
              <Form>
                <Form.Group className="mb-3" controlId="email-register">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password-register">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex text-right mb-3">
                  <Button
                    variant="primary"
                    className="me-3"
                    onClick={handleRegister}
                  >
                    Đăng kí
                  </Button>
                  <Button variant="primary">Đóng</Button>
                </div>
              </Form>
            </Container>
          </Tab>
        </Tabs>
      </Modal>
    </div>
  );
}
