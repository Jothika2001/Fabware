import { Link } from "react-router-dom";
import images from "../../assets/images";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import "./header.css"; 

function Header() {
  // State to track whether navbar is collapsed or not
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Track window width to apply different styles based on screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
  
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const logoStyle = {
    marginLeft: windowWidth > 991 ? '20rem' : '0', 
  };


  const handleToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <>
      <header>
        <Navbar
          expand="lg"
          fixed="top"
          className={`nav-bar ${isCollapsed ? '' : 'bg-light'}`} 
          style={{backgroundColor:"white"}}  
        >
          <Container fluid className="d-flex justify-content-between align-items-center">
            
            <Navbar.Brand className="d-flex align-items-center" style={logoStyle}>
              <Link to="/" className="d-flex align-items-center">
                <img src={images.image47} alt="Logo 1" />
                <img src={images.FABWARE} alt="Fabware Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbar-nav"
              className="ml-auto"
              onClick={handleToggle} 
            />
            <Navbar.Collapse id="navbar-nav " className="justify-content-center">
              <Nav className="d-flex justify-content-center w-100 ">
                <Nav.Link href="/" className="mx-3  hovering">Home</Nav.Link>
                <Dropdown className=" hover-dropdown">
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-products"
                    className="d-flex align-items-center  hovering" 
                    style={{ textDecoration: "none" }}
                  >
                    Products
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="menu-smooth">
                    <Dropdown.Item href="/products">All Products</Dropdown.Item>
                    <Dropdown.Item href="/products/water-bottle">Insulated Thermos Water Bottle</Dropdown.Item>
                    <Dropdown.Item href="/products/lint-roller">Lint Remover</Dropdown.Item>
                    <Dropdown.Item href="/products/toilet-paper-holder">Toilet Paper Holder</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link href="/about" className="mx-3  hovering">About Us</Nav.Link>
                <Nav.Link href="/contact" className="mx-3  hovering">Contact</Nav.Link>
                <Nav.Link href="/faq" className="mx-3  hovering">FAQ</Nav.Link>
              </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/adminlogin">
                <Button variant="outline-warning" className="ml-auto">Admin</Button>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
