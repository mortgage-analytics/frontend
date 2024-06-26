import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";

function AppNavbar() {

  const logout = () => {
	document.cookie = "AuthToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;" // deletes cookie
  }
 
  const isLoggedIn = () => {
	return document.cookie.includes("AuthToken")
  }

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary">
        <Container>
            <Navbar.Brand href="/">Mortgage Analytics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                {
                  isLoggedIn() ? (
                      <Nav.Link href="/data">Data</Nav.Link>
                  ) : (
                    null
                  )
                }
                {
                  isLoggedIn() ? (
                      <Nav.Link href="/overview">Overview</Nav.Link>
                  ) : (
                    null
                  )
                }
                
            </Nav>
            <Nav className="ml-auto">
                {
                  isLoggedIn() ? (
                    <Nav.Link className="ms-auto" style={{color:"white"}} href="/" onClick={logout}>Logout</Nav.Link>
                  ) : (
                    <Nav.Link className="ms-auto" style={{color:"white"}} href="/login">Login</Nav.Link>
                  )
                }
            </Nav>
            </Navbar.Collapse>

        </Container>
        </Navbar>
        <Outlet />
    </div>
  );
}

export default AppNavbar;
