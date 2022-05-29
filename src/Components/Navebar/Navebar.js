import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navebar.css'

const Navebar = () => {
    return (
        <div>
            <div>
            <Navbar >
            <Container>
            <Navbar.Brand href="#home"> <h1 className='logo'>LOGO</h1></Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link href="#home">BN/EN</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            </div>
            <div>
            <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
            <Container> 
            <Navbar.Brand href="#home">
          
             </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto">
             <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#home" to="/blog">Blog</Nav.Link>
               <Nav.Link href="#home" to="/portfolio">My Portfolio</Nav.Link>

               <Nav.Link href="#home" to="/dashboard">DashBoard</Nav.Link>
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </div>
        </div>
    );
};

export default Navebar;