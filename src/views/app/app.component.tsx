import { Box } from '@chakra-ui/react';
import Menu from '@src/core/components/menu.component';
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectorAccount } from '@src/selector/selectorAccount';
// Supports weights 100-900
import '@fontsource-variable/asap';
import { LoginStatus } from '@src/core/libs/constants';

const AppComponent: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const account = useSelector(getSelectorAccount);

  useEffect(() => {
    if (account.loginStatus !== LoginStatus.LoggedIn) {
      navigate('/sign-in');
      // navigate('/');
    }
  }, [account.loginStatus]);

  if (account.loginStatus !== LoginStatus.LoggedIn) {
    return <></>;
  }

  return (
    <Box>
      <Menu />
      <Box ml={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppComponent;
