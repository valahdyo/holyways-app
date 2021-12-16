import { Dropdown } from "react-bootstrap";
import Avatar from "../assets/avatar.png"
import IconProfile from "../assets/icon-profile.png"
import IconRaiseFund from "../assets/icon-raisefund.png"
import IconLogout from "../assets/icon-logout.png"

function DropdownComponent() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="danger"
          id="dropdown-basic"
        ><img src={Avatar} alt="avatar"></img></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1"><img className="mr-3" src={IconProfile} alt="profile"/>Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2"><img className="mr-3" src={IconRaiseFund} alt="raise-fund"/>Raise Fund</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3"><img className="mr-3" src={IconLogout} alt="logout"/>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropdownComponent;
