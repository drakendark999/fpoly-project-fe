import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInComponent from './sign-in.component';
import themes from '@src/theme/theme';
import { GOOGLE_CLIENT_ID } from '../../../../config';

const SignInContainer: React.FunctionComponent = () => {
  const [GoogleClientID, setGoogleClientID] = React.useState('');

  React.useEffect(() => {
    if (document.body) {
      document.body.style.backgroundColor = '#f5f6fa';
    }
    const ClientID: string = GOOGLE_CLIENT_ID;
    setGoogleClientID(ClientID);
  }, []);

  return (
    <GoogleOAuthProvider clientId={GoogleClientID}>
      <ChakraProvider theme={themes}>
        <SignInComponent />
      </ChakraProvider>
    </GoogleOAuthProvider>
  );
};

export default SignInContainer;
