import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
const NavBar = () => (
  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid className="mx-5">
      <Navbar.Brand href="#home">
        <img src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png" width="120px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/TvShows">
            Tv shows
          </NavLink>
          <NavLink className="nav-link" to="/Movies">
            Movies
          </NavLink>
          <NavLink className="nav-link" to="/RecentlyAdd">
            Recently Added
          </NavLink>
          <NavLink className="nav-link" to="/MyList">
            My List
          </NavLink>
        </Nav>
        <Nav className="ms-auto">
          <NavLink className="nav-link" href="#home">
            <Search />
          </NavLink>
          <NavLink className="nav-link" to="/KIDS">
            KIDS
          </NavLink>
          <NavLink className="nav-link" href="#pricing">
            <BellFill />
          </NavLink>
          <NavDropdown title={<PersonFill />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
