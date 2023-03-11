import React from "react";
import { Text, Box, Flex, Grid, Img, Spacer } from "@chakra-ui/react";
import ContentBox from "../content-box/ContentBox";
import { SelectOption } from "../select-option/SelectOption";

const Header = () =>
{
  const value = {
    coso: "Cơ sở",
    khuVuc: "Khu vực",
    user: "user longnv36",
    hocky: "Học kỳ",
    MaKyThi: "Mã kỳ thi",
  };

  const data = {
    hocKy: ["Spring 2022", "Summer 2022", "Fall 2022"],
    maKyThi: "FA22",
    coSo: "Hồ Chí Minh",
    khuVuc: ["Phần mền Quang Trung", "Nguyễn Kiệm", "Google Meet"]
  }

  return (
    <Flex>
      <Img
        w={160}
        h='fit-content'
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png"
        alt="logo FPT Polytechnic"
      ></Img>
      <Spacer></Spacer>
      <Flex gap="3">
        <Box pl={4} py={2} bg='#1FC198' color='white' borderRadius='md'>
          <ContentBox title='Cơ sở' content = 'Hồ Chí Minh'/>
          <SelectOption title='khu vực' data={data.khuVuc} />
        </Box>
        <Box pl={4} py={2} bg='#1FC198' color='white' borderRadius='md'>
          <SelectOption title='học kỳ' data={data.hocKy} />
          <ContentBox title='mã kỳ thi' content = 'FA22'/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
