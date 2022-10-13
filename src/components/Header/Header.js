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
                    <Navbar.Brand href="/">Sarah And Justin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/our-story">Our Story</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/RSVP">RSVP </Nav.Link>
                        <Nav.Link href="/accomodations">Accomodations </Nav.Link>
                        <Nav.Link href="/events">Events </Nav.Link>
                        <Nav.Link href="/albums">Albums </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;