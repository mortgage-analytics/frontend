import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";

function AppNavbar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary">
        <Container>
            <Navbar.Brand href="/">Mortgage Analytics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/data">Data</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet />
    </div>
  );
}

export default AppNavbar;
