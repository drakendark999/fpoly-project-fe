import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../images/Temp-logo.png";
import image from "../../images/sign-in-amico.svg";

import {
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  Center,
  Square,
} from "@chakra-ui/react";

import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";

import { getAccount } from "../../selectors/selectors";
import accountSlice from "../../stores/slices/accountSlice";

document.querySelector("body").style.backgroundColor = "#f5f6fa";

let SignIn = () => {
  const dispatch = useDispatch();
  let { account } = useSelector(getAccount);

  let handleCallbackResponse = (response) => {
    dispatch(accountSlice.actions.setAccount(response.credential));
  };

  useEffect(() => {
    // Global Google
    google.accounts.id.initialize({
      client_id:
        "675117387116-dhvu74qrsqm5413trd2omucivq94qgje.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInButton"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex w={"50%"} mt={"20"} borderRadius={"10px"} bg={"white"}>
          <Box w={"40%"}>
            <Image w={"100%"} minH={"400px"} src={image} alt="Logo" />
          </Box>
          <Box w={"60%"} p={10} bg={"white"}>
            <Image mt={10} w={"70%"} mx={"auto"} src={logo} alt="Logo" />
            <Text mt={4} textAlign={"center"} fontSize="sm" color={"gray.500"}>
              Đăng nhập để bắt đầu sử dụng.
            </Text>
            <Center mt={4}>
              <SignInButton />
            </Center>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
