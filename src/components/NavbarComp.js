import React from "react"
import '../App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

function NavbarComp() {
    return (
        <div>
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Streetside Tacos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"./Home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"./Menu"}>Menu</Nav.Link>
                            <Nav.Link as={Link} to={"./Contact"}>Contact</Nav.Link>
                            <Nav.Link as={Link} to={"./About"}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
        </div>
    )
}

export default NavbarComp;
