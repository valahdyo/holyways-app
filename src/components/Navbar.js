import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Modal,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import DropdownComponent from "./Dropdown";
import LoginModalComponent from "./Loginmodal";
import Logo from "../assets/brand-logo.png";
import Avatar from "../assets/avatar.png";

function NavbarComponent() {
  let isLogin = false;

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <Navbar className="navTheme">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="65"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto px-2">
          {isLogin ? (
            <DropdownComponent />
          ) : (
            <>
              <Button onClick={handleShowLogin} className="navBtnLogin">
                Login
              </Button>
              <Button onClick={handleShowRegister} className="navBtnRegister">Register</Button>
            </>
          )}
        </Nav>
      </Navbar>

      <Modal show={showLogin} onHide={handleCloseLogin} contentClassName="w-75 m-auto">
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

      <Modal show={showRegister} onHide={handleCloseRegister} contentClassName="w-75 m-auto">
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
    </>
  );
}

export default NavbarComponent;
