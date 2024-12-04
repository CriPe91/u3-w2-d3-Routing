import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Grid } from "react-bootstrap-icons";
const UnderNav = () => (
  <>
    <Container fluid className="d-flex justify-content-between align-items-center">
      <Row className="ms-4 mb-5">
        <Col className="d-flex align-items-center">
          <h3 className="display-6 text-light mb-3">TV Shows</h3>
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic" className="mx-3">
              Generi
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">Movies</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Series</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cartoon</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="me-5 mb-4">
        <Col className="d-flex align-items-center">
          <Button variant="dark" className="border border-radius-1 mx-2">
            <List />
          </Button>
          <Button variant="dark" className="border border-radius-1">
            <Grid />
          </Button>
        </Col>
      </Row>
    </Container>
  </>
);
export default UnderNav;
