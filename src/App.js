import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage"
import DetailDonatepage from "./pages/DetailDonatepage";
import Raisefundpage from "./pages/Raisefundpage"
import Formfundpage from "./pages/Formfundpage";
import LoginModalComponent from "./components/Loginmodal"

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavbarStyle.css'
import './styles/HomepageStyle.css'
import './styles/ProfilepageStyle.css'
import './styles/DonateInfoStyle.css'
import './styles/FormfundpageStyle.css'


function App() {
  return (
    <div>
    {/* <LoginModalComponent/> */}
    {/* <Formfundpage/> */}
    {/* <Raisefundpage/> */}
    <DetailDonatepage/>
    {/* <Homepage/> */}
    {/* <Profilepage/> */}
    </div>
  );
}

export default App;
