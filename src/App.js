import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import AuthContextProvider from './context/AuthContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavbarStyle.css'
import './styles/HomepageStyle.css'
import './styles/ProfilepageStyle.css'
import './styles/DonateInfoStyle.css'
import './styles/FormfundpageStyle.css'


function App() {
  return (
    <AuthContextProvider>
    <Router>
      <Routes/>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
