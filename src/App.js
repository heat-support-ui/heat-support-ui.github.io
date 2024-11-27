import React, { useState, useEffect, useRef } from 'react';
import {
  App,
  BlockFooter,
  View,
  Page,
  Navbar,
  LoginScreen,
  LoginScreenTitle,
  Link,
  NavTitle,
  Preloader,
  f7ready,
  f7
} from 'framework7-react';

const GA_CLIENT_ID = '1092393785652-eluon044pa7rn4mdhus9jct1j0t9cua9.apps.googleusercontent.com';


function MyApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }

    // Define the function globally so it can be called by the Google script
    window.handleCredentialResponse = handleCredentialResponse;

    // Load the Google OAuth script
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    const token = response.credential;
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    console.log('User authenticated with Google OAuth:', token);
  };
  return (
    <App name="Cambridge Support" theme="ios">
      {!isAuthenticated ? (
      <LoginScreen id="my-login-screen" opened={!isAuthenticated}>
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login with Google</LoginScreenTitle>
              <div align="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <div
                  id="g_id_onload"
                  data-client_id={GA_CLIENT_ID}
                  data-callback="handleCredentialResponse"
                  data-auto_prompt="false"
                  className="g_id_signin"
                  data-type="standard"
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    height: '50px'
                  }}
                ></div>
              </div>
              <BlockFooter>
                Click the button above to sign in using your Google account.
              </BlockFooter>
            </Page>
          </View>
      </LoginScreen>
      ) : (

      <View main className="safe-areas" url="/">
        <Page>
          <Navbar>
            <NavTitle>Cambridge Support</NavTitle>
          </Navbar>
        </Page>
      </View>
        )}
    </App>
  );
}

export default MyApp;
