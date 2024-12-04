import { Col, Row, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => (
  <>
    <footer>
      <Row className="justify-content-center mt-5">
        <Col className="col col-6">
          <Row className="row">
            <Col className="col mb-2">
              <a>
                <Facebook className="ms-0 mx-2" />
              </a>
              <a>
                <Instagram className="mx-2" />
              </a>
              <a>
                <Twitter className="mx-2" />
              </a>
              <a>
                <Youtube className="mx-2" />
              </a>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <Col className="col">
              <Row className="row">
                <Col className="col footer-links">
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="col">
              <Row className="row">
                <Col className="col footer-links">
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="col">
              <Row className="row">
                <Col className="col footer-links">
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="col">
              <Row className="row">
                <Col className="col footer-links">
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a className="text-light text-decoration-none" href="#" title="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col mb-2">
              <Button type="button" className="btn btn-sm footer-button border border-none mt-3 bg-dark text-ligth">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </footer>
  </>
);

export default MyFooter;
