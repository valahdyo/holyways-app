import NavbarComponent from "../components/Navbar";
import {
  ProgressBar,
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import HeaderImage_1 from "../assets/1340554718-1.png";
import HeaderImage_2 from "../assets/1340554718-2.png";
import DonateImage_1 from "../assets/donate-1.png";
import DonateImage_2 from "../assets/donate-2.png";
import DonateImage_3 from "../assets/donate-3.png";


function Homepage() {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="header-wrapper">
        <Row>
          <Col lg={7}>
            <h1 className="heading-font light-color">
              While you are still standing, try to reach out to the people who
              are falling.
            </h1>
            <p className="header-desc-font light-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button className="header-btn">Donate Now</Button>
          </Col>
          <Col lg={5}>
            <img src={HeaderImage_1} className="header-img-1" alt="hero1"></img>
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-wrapper">
        <Row>
          <Col lg={4}>
            <img src={HeaderImage_2} className="header-img-2" alt="hero2"></img>
          </Col>
          <Col className="content-desc" lg={8}>
            <h1 className="heading-font dark">
              Your donation is very helpful for people affected by forest fires
              in Kalimantan.
            </h1>
            <Row>
              <Col lg={6}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Col>
              <Col lg={5}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="donate-wrapper">
        <h1 class="donate-heading">Donate Now</h1>
        <Row>
          <Col lg={4} className="donate-box">
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
                <ProgressBar className="donate-progress" variant="danger" now={60} />
                <div className="donate-box-bottom">
                <p className="donate-collected">Rp 25.000.000</p>
                <Button className="donate-btn" variant="primary">Donate</Button>
                </div>
                
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="donate-box">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={DonateImage_2} />
              <Card.Body>
                <Card.Title className="donate-title">
                  Empowering Communities Ending Poverty
                </Card.Title>
                <Card.Text className="donate-desc">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ProgressBar className="donate-progress" variant="danger" now={40} />
                <div className="donate-box-bottom">
                <p className="donate-collected">Rp 25.000.000</p>
                <Button className="donate-btn" variant="primary">Donate</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="donate-box">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={DonateImage_3} />
              <Card.Body>
                <Card.Title className="donate-title">
                  Please our brothers in flores
                </Card.Title>
                <Card.Text className="donate-desc">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ProgressBar className="donate-progress" variant="danger" now={80} />
                <div className="donate-box-bottom">
                <p className="donate-collected">Rp 25.000.000</p>
                <Button className="donate-btn" variant="primary">Donate</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
