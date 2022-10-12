import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sarah And Justin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Our Story</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">RSVP </Nav.Link>
                        <Nav.Link href="#deets">Accomodations </Nav.Link>
                        <Nav.Link href="#deets">Events </Nav.Link>
                        <Nav.Link href="#deets">Albums </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;