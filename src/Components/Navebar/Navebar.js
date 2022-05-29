import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        {/* -------------main-menu-----------     */}
            <div className='main-menu'>
            <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
            <Container> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
               <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
               <Nav.Link href="#home" to="/portfolio">My Portfolio</Nav.Link>
               <Nav.Link href="#home" to="/dashboard">DashBoard</Nav.Link>
             </Nav>
            </Navbar.Collapse>
            <div className="ms-auto d-flex align-items-center"  style={{backgroundColor:"white",borderRadius:"40px",padding:"5px 30px",boxShadow:'0px 3px 2px -1px'}}>
               <Nav.Link href="#home" style={{color:'black',fontSize:"18px"}} className='me-3'>Login</Nav.Link>
               <Nav.Link href="#home" style={{backgroundColor:'#FF6F00',color:'white',width:"120px",height:'40px',borderRadius:'40px'}} >SIGN UP</Nav.Link>
             </div>
          </Container>
        </Navbar>
            </div>
        </div>
    );
};

export default Navebar;