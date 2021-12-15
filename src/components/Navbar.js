import { Nav, Navbar, Button } from "react-bootstrap";
import Logo from "../assets/brand-logo.png";
import Avatar from "../assets/avatar.png"


function NavbarComponent() {
  let isLogin = true
  return (
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
        {isLogin ? <img src={Avatar} alt="avatar" className="avatar"></img> 
        :<><Button className="navBtnLogin">Login</Button>
        <Button className="navBtnRegister">Register</Button></>}
        
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
