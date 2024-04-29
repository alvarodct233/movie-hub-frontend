import { Auth0Provider } from '@auth0/auth0-react';
// import { render } from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Auth0Provider 
            domain="alvaro-dct.eu.auth0.com" 
            clientId="6oM95VCnnseyBI1C1KanXeOCxqfmC8rx" 
            authorizationParams={{
                redirect_uri: window.location.origin,
                // audience: audience,
        }}>
            <App />
        </Auth0Provider>
    </React.StrictMode>
);