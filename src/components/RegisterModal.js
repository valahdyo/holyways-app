import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function RegisterModalComponent(props) {

    const {showRegister, handleCloseRegister, closeRegister} = props

    return (
        <Modal show={showRegister} onHide={closeRegister} contentClassName="w-75 m-auto">
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col lg="11">
              <div className="profile-heading text-left mt-3 mb-4 h3">
                Register
              </div>
              <Form /*onSubmit={handleOnSubmit}*/>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    className="form-color"
                    // onChange={handleOnChange}
                    // value={state.fullname}
                    name="fullname"
                    size="sm"
                    type="text"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control
                    className="form-color"
                    // onChange={handleOnChange}
                    // value={state.email}
                    name="email"
                    size="sm"
                    type="email"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formFullName">
                  <Form.Control
                    className="form-color"
                    // onChange={handleOnChange}
                    // value={state.email}
                    name="email"
                    size="sm"
                    type="email"
                    placeholder="Full Name"
                  />
                </Form.Group>
                <Button
                  onClick={handleCloseRegister}
                  className="donate-btn mb-3"
                  style={{ width: "100%" }}
                >
                  Register
                </Button>
                <p className="text-center">
                  Don't have an account ? Klik <strong>Here</strong>
                </p>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    )
}

export default RegisterModalComponent
