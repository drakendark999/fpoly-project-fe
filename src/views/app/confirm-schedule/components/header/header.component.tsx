import React from 'react';
import logo from '@src/assets/logoFEF.png';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
interface HeaderProps {
  gv: string;
}

type Props = HeaderProps;

const Header: React.FunctionComponent<Props> = ({ gv }) => {
  return (
    // <Flex align="center">
    <Flex pos="relative" h="80px" align="center" justify="center">
      <Box pos="absolute" top={0} left={0}>
        <Image w={160} src={logo} alt="logo" />
      </Box>
      <Text textTransform="uppercase" fontWeight="600" fontSize="xl">
        Xác nhận thời gian có thể tham gia gác thi của giảng viên {gv}
      </Text>
    </Flex>
  );
};

export default Header;
