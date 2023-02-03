import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";


import Home from "./home";
function App() {
    return (
        <ChakraProvider>
            <Container maxW="1200px" >
                <Routes>
                    <Route path="/home/*" element={<Home />} />
                    <Route path={``} element={<Navigate replace to="home" />} />
                </Routes>
            </Container>
        </ChakraProvider>
    );
}

export default App;
