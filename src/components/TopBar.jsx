import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Meow from '../assets/meow.png';

export default function TopBar() {
    return (
        <Navbar
            expand="lg"
            style={{
                // backgroundColor:'red',
                paddingLeft: '100px',
                paddingRight: '100px',
                position: 'static',
                // top: 0,
                width: '100%',
            }}
        >
            <Container fluid>
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={Meow}
                        alt="Logo"
                        style={{
                            width: '80px',
                            height: '60px',
                            marginLeft: '150px',
                        }}
                        className="d-inline-block align-top img-fluid zoom"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="/cat-breeds"
                            // style={{ marginLeft: '100px' }}
                        >
                            Cat Breeds
                        </Nav.Link>
                        <Nav.Link
                            href="/cat-facts"
                            // style={{ marginRight: '150px' }}
                        >
                            Cat Facts
                        </Nav.Link>
                        <Nav.Link
                            href="/random-fact"
                            style={{ marginRight: '150px' }}
                        >
                            Random Fact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
