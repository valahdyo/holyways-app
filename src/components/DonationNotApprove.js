import {useState} from 'react'
import { Modal, Form, Button, Container, Row, Col } from "react-bootstrap";
import Struk from '../assets/struk.png'

function DonationNotApproveComponent() {
  const [showDonate, setShowDonate] = useState(false)

    const handleShowDonate = () => {
        setShowDonate(true)
    }

    const handleCloseDonate = () => {
        setShowDonate(false)
    }

  return (
    <>
    <Container>
      <h1 className="profile-heading pt-5 mb-4">
        Donation has not been approved (10)
      </h1>
      <Row>
        <Col lg={12}>
          <div className="d-flex justify-content-between donation-box mb-4 pt-4 pl-4">
            <div className="w-50">
              <h3 className="donation-heading">Zain</h3>
              <p className="donation-date">
                <strong style={{ fontWeight: 900 }}>Saturday, </strong>12 April
                2021
              </p>
              <p className="donation-total">Total : Rp. 45.000</p>
            </div>
            <div className="align-self-center">
              <Button onClick={handleShowDonate} className="donate-btn" variant="primary">
                View
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <div className="d-flex justify-content-between donation-box mb-4 pt-4 pl-4">
            <div className="w-50">
              <h3 className="donation-heading">Malik</h3>
              <p className="donation-date">
                <strong style={{ fontWeight: 900 }}>Saturday, </strong>12 April
                2021
              </p>
              <p className="donation-total">Total : Rp. 45.000</p>
            </div>
            <div className="align-self-center">
              <Button onClick={handleShowDonate} className="donate-btn" variant="primary">
                View
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <div className="d-flex justify-content-between donation-box mb-4 pt-4 pl-4">
            <div className="w-50">
              <h3 className="donation-heading">Hahiha</h3>
              <p className="donation-date">
                <strong style={{ fontWeight: 900 }}>Saturday, </strong>12 April
                2021
              </p>
              <p className="donation-total">Total : Rp. 45.000</p>
            </div>
            <div className="align-self-center">
              <Button onClick={handleShowDonate} className="donate-btn" variant="primary">
                View
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    
    <Modal show={showDonate} onHide={handleCloseDonate} contentClassName="w-100 m-auto">
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            
            <Col lg="11">
            <h1 className="view-donate-heading">Zain</h1>
              <Form /*onSubmit={handleOnSubmit}*/>
                <Form.Group className="mt-3 mb-3" controlId="formNominalDonation">
                  <Form.Control
                    className="form-color"
                    // onChange={handleOnChange}
                    // value={state.fullname}
                    name="fullname"
                    size="sm"
                    type="text"
                    placeholder="45.000.000"
                  />
                </Form.Group>
                <img src={Struk} alt="struk"></img>               
                <Button
                  onClick={handleCloseDonate}
                  className="attach-donate-btn mt-3 mb-3"
                  style={{ width: "100%" }}
                >
                  Approve
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DonationNotApproveComponent;
