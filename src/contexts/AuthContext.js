import React, { useContext, useState } from 'react';

//creating context using React.createContext();
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  //creating state for users it starts empty becuase we have no users.
  const [currentUser, setCurrentUser] = useState();

  //passing the value of the current user into the context provider below.
  const value = {
    currentUser,
  };

  return (
    //created authcontext provider that takes children as an argument
    //so whatever it's wrapped around can access the context passed down to it.
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
