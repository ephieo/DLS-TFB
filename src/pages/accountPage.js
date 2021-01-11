import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "./../contexts/AuthContext";


function AccountPage (){
    const [ error, setError ] = useState('')
    const { currentUser,logout } = useAuth();
    const history = useHistory();
    
    async function handleLogout (){
        setError('')    
        
        try{
         await logout();
         history.push('/')
        }
        catch{
          
        }
      }
    return (
        <div>
            <h1>Account Page</h1>
            <h3>{currentUser ? currentUser.email : <p>No user signed in:</p>}</h3>
            <button>Update Profile</button> 
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}


export default AccountPage;