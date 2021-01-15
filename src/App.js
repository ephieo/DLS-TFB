import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import LandingPage from './pages/landingPage';
import { AuthProvider } from './contexts/AuthContext';
import AccountPage from './pages/accountPage';
import PrivateRoute from './utils/PrivateRoute';
import ForgotPassword from './pages/forgotPassword';
import AccountUpdate from './pages/accountUpdate';
import QuizStagePage from './pages/quizzesStagePage';
import QuizOptionPage from './pages/k3QuizOptionsPage';
// import MultipleChoice from './pages/MultipleChoicePage';
//import OptionsPage from "./pages/optionsPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/account" component={AccountPage} />
          <PrivateRoute path="/account-update" component={AccountUpdate} />
          <PrivateRoute path="/quiz-stage" component={QuizStagePage} />
          <PrivateRoute path="/:stage/quiz-option" component={QuizOptionPage} />
          <PrivateRoute
            path="/:stage/quiz-option/:title"
            // component={MultipleChoice}
          />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
