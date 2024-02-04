import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
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
          <Navbar.Text>&copy; Iid Muiz Awaludin</Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
