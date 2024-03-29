import {
  Button,
  Container,
  Form,
  Nav,
  Navbar
} from "react-bootstrap";
import { Link, Routes } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        variant="light"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#">SMAN 1 MAJALENGKA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes />
    </>
  );
};

export default Navigation;
