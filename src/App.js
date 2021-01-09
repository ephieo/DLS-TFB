import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import LandingPage from './pages/landingPage';
import {AuthProvider} from './contexts/AuthContext';
//import OptionsPage from "./pages/optionsPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
