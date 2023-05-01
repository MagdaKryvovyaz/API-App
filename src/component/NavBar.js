import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react'


function NavBar() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">APIsearch</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/tenor">Tenor</Nav.Link>
        <Nav.Link href="/spotify">Spotify</Nav.Link>
        <Nav.Link href="/joke">Joke</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
        <Nav.Link href="/facebook">Facebook</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  </div>
  )
}

export default NavBar