import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import home from "../../assets/home.png";

function HeaderBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              <img src={home} alt="home" style={{ width: "30px" }} />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
