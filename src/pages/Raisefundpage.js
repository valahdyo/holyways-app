import {
  ProgressBar,
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import DonateImage_1 from "../assets/donate-1.png";

function Raisefundpage() {
  return (
    <>
      <NavbarComponent />
      <Container className="mt-5 pr-5">
        <Row className="d-flex justify-content-between pr-5">
          <div className="profile-heading mb-4">My Raise Fund</div>
          <div className="pt-2">
            <Button className="w-100 donate-btn">Make Raise Fund</Button>
          </div>
        </Row>
        <Row>
          <Col lg={4} className="donate-box pl-0 pt-0">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={DonateImage_1} />
              <Card.Body>
                <Card.Title className="donate-title">
                  The Strength of a People. Power of Community
                </Card.Title>
                <Card.Text className="donate-desc">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ProgressBar
                  className="donate-progress"
                  variant="danger"
                  now={50}
                />
                <div className="donate-box-bottom">
                  <p className="donate-collected">Rp 25.000.000</p>
                  <Button className="donate-btn" variant="primary">
                    Donate
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Raisefundpage;
