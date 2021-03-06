import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function LoginModalComponent(props) {
    const {showLogin, handleCloseLogin, closeLogin} = props
    return (
      <> 
        <Modal show={showLogin} onHide={closeLogin} contentClassName="w-75 m-auto">
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col lg="11">
              <div className="profile-heading text-left mt-3 mb-4 h3">
                Login
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
                <Form.Group className="mb-4" controlId="formPassword">
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
                <Button
                  onClick={handleCloseLogin}
                  className="donate-btn mb-3"
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
                <p className="text-center">
                  Don't have an account ? Klik <strong>Here</strong>
                </p>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      </>
    );
  }

export default LoginModalComponent
 