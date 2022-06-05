import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function AppBar() {
  return (
    <div id="AppBar">
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">
            Football Championship Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Giải đấu</Nav.Link>
              <Nav.Link href="#link">Đội thi đấu</Nav.Link>
              <NavDropdown title="Le Quang Minh" id="basic-nav-dropdown">
                <NavDropdown.Item href="/account/myleague">
                  Quản lí giải đấu
                </NavDropdown.Item>
                <NavDropdown.Item href="/account/myteam">
                  Quản lí đội
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
