import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { Flex, Box, Image, Text, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { accountAction } from '@src/core/store/reducer/account';
import { onThunkCheckEmail } from '@src/core/store/reducer/account/thunk';

import FPFLogo from '@src/assets/logoFEF.png';
import SignInGraphic from '@src/assets/sign-in-graphic.svg';
import { AppDispatch } from '@src/core/store/store';
import { LoginStatus } from '@src/core/libs/constants';

const SignInComponent: React.FunctionComponent = () => {
  const [token, setToken] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useSelector(getSelectorAccount).accessToken;
  const loginStatus = useSelector(getSelectorAccount).loginStatus;

  React.useEffect(() => {
    if (loginStatus === LoginStatus.LoggedIn) {
      if (accessToken != '') {
        navigate('/');
      } else {
        dispatch(accountAction.setAccount(token));
        navigate('/');
      }
    }
  }, [loginStatus]);

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const decoded: { email: string } = jwt_decode(
      credentialResponse.credential as string,
    );
    setToken(credentialResponse.credential as string);
    dispatch(onThunkCheckEmail(decoded.email));
  };

  if (loginStatus === LoginStatus.LoggedIn) {
    return <></>;
  }

  return (
    <Flex justifyContent={'center'}>
      <Flex w={'50%'} mt={'20'} borderRadius={'10px'} bg={'white'}>
        <Box w={'40%'}>
          <Image w={'100%'} minH={'400px'} src={SignInGraphic} alt="Logo" />
        </Box>
        <Flex
          flexDir={'column'}
          alignItems={'center'}
          w={'60%'}
          p={10}
          bg={'white'}>
          <Image mt={10} w={'50%'} src={FPFLogo} alt="Logo" />
          <Text mt={4} textAlign={'center'} fontSize="sm" color={'gray.500'}>
            Đăng nhập để bắt đầu sử dụng.
          </Text>
          <Center mt={4}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log('Login Failed');
              }}
              hosted_domain={'fpt.edu.vn'}
            />
          </Center>
          {loginStatus == 'not-found' && (
            <Text mt={2} textAlign={'center'} fontSize="xs" color={'red.400'}>
              Không tìm thấy tài khoản
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignInComponent;
