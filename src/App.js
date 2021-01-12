import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import LandingPage from './pages/landingPage';
import {AuthProvider} from './contexts/AuthContext';
import AccountPage from './pages/accountPage';
import PrivateRoute from './utils/PrivateRoute';
import ForgotPassword from './pages/forgotPassword';
//import OptionsPage from "./pages/optionsPage";

function App() {
  return (
    <Router>
      <AuthProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/account" component={AccountPage} />
            
          </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
