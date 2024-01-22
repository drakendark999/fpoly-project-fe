import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import AppComponent from './app.component';
import themes from '@src/theme/theme';

const App: React.FunctionComponent = () => {
  return (
    <ChakraProvider theme={themes}>
      <Container>
        <AppComponent />
      </Container>
    </ChakraProvider>
  );
};

export default App;
