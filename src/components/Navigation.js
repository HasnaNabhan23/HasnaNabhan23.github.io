import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  const navbarStyle = {
    backgroundColor: '#65451F', 
  };

  return (
    <Navbar style={navbarStyle} variant="dark" expands="lg">
      <Container>
        <Navbar.Brand href="#">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
