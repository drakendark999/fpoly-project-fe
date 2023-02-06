import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";


import Home from "./home";
import Test from "./test";
function App() {
    return (
        <ChakraProvider>
            <Container maxW="1519px" >
                <Routes>
                    <Route path="/home/*" element={<Home />} />
                    <Route path="/test/*" element={<Test />} />
                    <Route path={``} element={<Navigate replace to="home" />} />
                </Routes>
            </Container>
        </ChakraProvider>
    );
}

export default App;
