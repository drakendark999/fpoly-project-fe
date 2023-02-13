import React from "react";
import { Flex, Img, Spacer } from "@chakra-ui/react";
import ContentBox from "../content-box/ContentBox";

const Header = () => {
  const value = {
    coso: "Cơ sở Hồ Chí Minh",
    user: "user longnv36",
    hocky: "Học kỳ Spring 2023",
    hockyh: "Học kỳ H",
    color: "red",
  };

  return (
    <Flex>
      <Img
        w={200}
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png"
        alt="logo FPT Polytechnic"
      ></Img>
      <Spacer></Spacer>
      <Flex gap="3">
        <ContentBox coso={value.coso} user={value.user} />

        <ContentBox hocky={value.hocky} hockyh={value.hockyh} />
      </Flex>
    </Flex>
  );
};

export default Header;
