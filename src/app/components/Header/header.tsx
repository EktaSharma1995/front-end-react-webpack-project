import * as React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

export const Header = () => {
  const name = 'Ekta Sharma';
  return (
    <ReactBootStrap.Container fluid>
      <ReactBootStrap.Navbar className="custom" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#title">
          {name}
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#about">
              About
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#resume">
              Resume
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#work">Work</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#skills">
              Skills
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#about">
              Contact
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </ReactBootStrap.Container>
  );
};

/* <StickyHeader header={}></StickyHeader>; */
