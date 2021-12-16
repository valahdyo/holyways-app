import {useState} from 'react'
import {Modal, Form, Button, ProgressBar, Container, Row, Col, } from "react-bootstrap";
import Donate1 from "../assets/donate-1.png"
import IconAttach from "../assets/icon-attach-payment.png"

function DonateInfoComponet() {
    const [showDonate, setShowDonate] = useState(false)

    const handleShowDonate = () => {
        setShowDonate(true)
    }

    const handleCloseDonate = () => {
        setShowDonate(false)
    }

    return (
        <>
        <Container className="donate-info-wrapper">
            <Row>
                <Col  lg={6}>
                    <img className="donate-info-photo" alt="donate-img" src={Donate1} ></img>
                </Col>
                <Col className="ml-4 pr-5" lg={5}>
                    <h1 className="profile-heading">The Strength of a People. Power of Community</h1>
                    <div className="donate-info-collected">
                        <p className="donate-total">Rp 25.000.000 <span className="ml-7 fs-6 text-muted">gathered from </span><span className="ml-7 donate-total text-muted">Rp 200.000.000</span></p>
                        <ProgressBar className="donate-info-progress" variant="danger" now={60} />
                        <div className="mt-3">
                        <p className="donate-info-detail d-inline">200 <span className="fs-6 text-muted mr-5">Donation</span></p>
                        <p className="ml-40 donate-info-detail d-inline-block">150 <span className="fs-6 text-muted text-right">More Day</span></p>
                        </div>
                    </div>
                    <p className="donate-info-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Button onClick={handleShowDonate} className="donate-btn w-100">Donate</Button>
                </Col>
            </Row>
        </Container>

        <Modal show={showDonate} onHide={handleCloseDonate} contentClassName="w-100 m-auto">
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col lg="11">
              <Form /*onSubmit={handleOnSubmit}*/>
                <Form.Group className="mt-3 mb-3" controlId="formNominalDonation">
                  <Form.Control
                    className="form-color"
                    // onChange={handleOnChange}
                    // value={state.fullname}
                    name="fullname"
                    size="sm"
                    type="text"
                    placeholder="Nominal Donation"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between mb-5"><Button
                  onClick={handleCloseDonate}
                  className="attach-btn"
                  style={{ width: "40%" }}
                >
                  Attach Payment <img className="ml-2 mb-1" src={IconAttach} alt="attach"/>
                </Button><p className='mt-2 align-self-center text-muted text-tnr'>*transfers can be made to holyways accounts</p></div>
                
                <Button
                  onClick={handleCloseDonate}
                  className="attach-donate-btn mb-3"
                  style={{ width: "100%" }}
                >
                  Donate
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      </>
    )
}

export default DonateInfoComponet