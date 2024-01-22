import React from 'react';
import logo from '@src/assets/logoFEF.png';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Header: React.FunctionComponent = () => {
  return (
    // <Flex align="center">
    <Flex pos="relative" h="80px" align="center" justify="center">
      <Box pos="absolute" top={0} left={0}>
        <Image w={160} src={logo} alt="logo" />
      </Box>
      <Text textTransform="uppercase" fontWeight="600" fontSize="xl">
        Báo cáo thi
      </Text>
    </Flex>
  );
};

export default Header;
