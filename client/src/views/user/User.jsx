import { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../../selectors/selectors";
import accountSlice from "../../stores/slices/accountSlice";

import {
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  Center,
  Square,
  Button,
} from "@chakra-ui/react";

document.querySelector("body").style.backgroundColor = "#f5f6fa";

let User = () => {
  const dispatch = useDispatch();

  let { account: token } = useSelector(getAccount);
  let account = token.length ? jwt_decode(token) : {};

  let signOut = () => {
    dispatch(accountSlice.actions.clearAccount());
  };

  return (
    <>
      {JSON.stringify(account) != JSON.stringify({}) && (
        <Flex justifyContent={"center"} mt={10}>
          <Flex flexDirection={"column"} w={"30%"} alignItems={"center"}>
            <Image src={account.picture} w={"200px"} mx={"auto"} />
            <Text mt={"20px"} fontSize="xl" textAlign={"center"}>
              {account.given_name}
            </Text>
            <Button onClick={() => signOut()} mx={"auto"} colorScheme={"teal"}>
              Sign Out
            </Button>
          </Flex>
        </Flex>
      )}
      {JSON.stringify(account) == JSON.stringify({}) && (
        <Text mt={5} fontSize={"2xl"} textAlign={"center"}>
          Đăng nhập để xem thông tin tài khoản.
        </Text>
      )}
    </>
  );
};

export default User;
