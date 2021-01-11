import React, { useContext, useState, useEffect } from 'react';
//importing auth function that was initialized in firebase.js
import { auth } from './../database/firebase'

//creating context using React.createContext();
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  //creating state for users it starts empty becuase we have no users.
  const [currentUser, setCurrentUser] = useState();
  const [userLoading, setUserLoading] = useState(true);

  function signup (email,password){
     // createUserWithEmailAndPassword is a function from firebase creating a new signup 
    return auth.createUserWithEmailAndPassword(email,password);
    
  }

  function login(email, password){
    return auth.signInWithEmailAndPassword(email, password)
  }

  //onAuthStateChanged is triggered when a user signs in and signs out,
  // and returns an unsubscribe to stop that function from running

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setUserLoading(false)
    })
    
    return unsubscribe;  
  }, [])

  //passing the value of the current user into the context provider below.
  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    //created authcontext provider that takes children as an argument
    //so whatever it's wrapped around can access the context passed down to it.
    <AuthContext.Provider value={value}>{!userLoading && children}</AuthContext.Provider>
  );
}
