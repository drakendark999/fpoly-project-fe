import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

import Home from "./home";
import SignIn from "./sign-in";
import User from "./user/User";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="1519px">
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/sign-in/*" element={<SignIn />} />
          <Route path="/user/*" element={<User />} />
          <Route path={``} element={<Navigate replace to="home" />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
