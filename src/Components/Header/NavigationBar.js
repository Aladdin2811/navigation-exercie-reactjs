import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Item style={{ color: 'white' }}>
        <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item style={{ color: 'white' }}>
        <Link to="/Category" className="nav-link">Category</Link>
      </Nav.Item>
      <Nav.Item style={{ color: 'white' }}>
        <Link to="/Products" className="nav-link">Products</Link>
      </Nav.Item>
      <Nav.Item style={{ color: 'white' }}>
        <Link to="/count" className="nav-link">Counter</Link>
      </Nav.Item>
      <Nav.Item style={{ color: 'white' }}>
        <Link to="/users" className="nav-link">Users</Link>
      </Nav.Item>
    </Nav>
  </Container>
</Navbar>
  )
}

export default NavigationBar