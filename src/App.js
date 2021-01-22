import './App.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import LandingPage from './pages/landingPage';
import { AuthProvider } from './contexts/AuthContext';
import AccountPage from './pages/accountPage';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import ForgotPassword from './pages/forgotPassword';
import AccountUpdate from './pages/accountUpdate';
import QuizStagePage from './pages/quizzesStagePage';
import K3QuizOptionPage from './pages/k3QuizOptionsPage';
import K4QuizOptionPage from './pages/k4QuizOptionsPage';
import logo from './images/logo.png';
import { Logo } from './styled-components/Landig';
// import MultipleChoice from './pages/MultipleChoicePage';
import OptionsPage from './pages/optionsPage';
import AboutUs from './pages/aboutPage';
// import Footer from './components/footer';
import VideoPage from './pages/videosPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <Switch>
          <PublicRoute exact path="/" component={LandingPage} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/account" component={AccountPage} />
          <PrivateRoute path="/account-update" component={AccountUpdate} />
          <PrivateRoute path="/quiz-stage" component={QuizStagePage} />
          <PrivateRoute path="/k3/quiz-option" component={K3QuizOptionPage} />
          <PrivateRoute path="/k4/quiz-option" component={K4QuizOptionPage} />
          <PrivateRoute path="/about" component={AboutUs} />
          <PrivateRoute path="/options" component={OptionsPage} />
          <PrivateRoute path="/video" component={VideoPage} />
          <PrivateRoute
            path="/:stage/quiz-option/:title"
            // component={MultipleChoice}
          />
        </Switch>
        {/* <Footer /> */}
      </AuthProvider>
    </Router>
  );
}

export default App;
