import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {

function handleLogout (){
  try{
   
  }
  catch{
    
  }
}
  
  return (
    <div>
      <h1>LANDING PAGE</h1>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
      <button onClick={handleLogout}>Log out</button>
    
    </div>
  );
}

export default LandingPage;
