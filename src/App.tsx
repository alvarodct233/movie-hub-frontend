import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login";
import React from 'react';
import { LogoutButton } from "./components/Logout";
import { Profile } from "./components/profile";

export default function App() {
    const { isAuthenticated } = useAuth0();



    return (
        <>
        {isAuthenticated ?( 
        <>
            <Profile />
            <LogoutButton />
            
        </> 
        ) : (
            <LoginButton />
        )}
        </>
    );
}
