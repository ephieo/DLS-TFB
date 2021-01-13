import React from 'react';
import { Link } from 'react-router-dom';
import {db} from './../database/firebase';

function LandingPage() {

  return (
    <div>
      <h1>LANDING PAGE</h1>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
}

export default LandingPage;
