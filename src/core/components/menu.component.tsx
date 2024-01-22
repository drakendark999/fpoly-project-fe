import React, { RefObject, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Image,
  Flex,
  Box,
  ListItem,
  ListIcon,
  List,
  Link,
} from '@chakra-ui/react';
import logo from '../../assets/logoFEF.png';
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi';
import {
  useNavigate,
  NavLink as RouterLink,
  useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { accountAction } from '../store/reducer/account';
import {
  MdSettingsSuggest,
  MdFreeCancellation,
  MdCancelPresentation,
} from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';
import { TbReportAnalytics } from 'react-icons/tb';
import { Pages } from '../libs/constants';
import ExportAll from '@src/views/app/home/components/export-all/export-all';
import { jwtAccount } from '../libs/ultis';
import { allowGv } from '../data/allow-gv';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector(getSelectorAccount);
  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountAccepted] = useState(allowGv.includes(MaGV));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: RefObject<HTMLButtonElement> = React.useRef(null);

  React.useEffect(() => {
    if (account.loginStatus != 'logged-in') {
      navigate('/sign-in');
    }
  }, [account.loginStatus]);

  const handleSignOut = () => {
    dispatch(accountAction.clearAccount());
  };

  return (
    <Box pos="fixed" top={0} left={0}>
      <Box w="20px" h="100vh" bg={'#FFFFFF'} borderRight="1px solid gray">
        <Box pos="absolute" top={0} left={0} borderRight={2}>
          <Button ref={btnRef} onClick={onOpen} mt="30px" variant="icon_open">
            <BiChevronsRight />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <Box
                pos="absolute"
                right={0}
                w="1px"
                h="100vh"
                bg="gray.700"></Box>
              <Button
                onClick={onClose}
                pos="absolute"
                top="30px"
                right="-17px"
                variant="icon_close">
                <BiChevronsLeft />
              </Button>
              <DrawerHeader borderBottomWidth="1px">
                <Image w={160} m="auto" src={logo} alt="logo" />
              </DrawerHeader>
              <DrawerBody>
                <Flex flexDir="column" justifyContent="space-between" h="100%">
                  <List variant="menu">
                    <ListItem>
                      {accountAccepted && (
                        <Link
                          onClick={onClose}
                          variant="menu"
                          as={RouterLink}
                          to={`https://kt-admin.polyhcm.com/`}>
                          <ListIcon as={MdSettingsSuggest} />
                          Quản trị
                        </Link>
                      )}
                    </ListItem>
                    <ListItem>
                      <Link
                        onClick={onClose}
                        variant="menu"
                        as={RouterLink}
                        to={Pages.HOME}>
                        <ListIcon as={AiOutlineSchedule} />
                        Lịch thi
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        onClick={onClose}
                        variant="menu"
                        as={RouterLink}
                        to={Pages.CONFIRM}>
                        <ListIcon as={MdFreeCancellation} />
                        Xác nhận lịch thi
                      </Link>
                    </ListItem>
                    <ListItem>
                      {accountAccepted && (
                        <Link
                          onClick={onClose}
                          variant="menu"
                          as={RouterLink}
                          to={Pages.CANCEL}>
                          <ListIcon as={MdCancelPresentation} />
                          Xử lý ca hủy / bận
                        </Link>
                      )}
                    </ListItem>
                    <ListItem>
                      <Link
                        onClick={onClose}
                        variant="menu"
                        as={RouterLink}
                        to={Pages.REPORT}>
                        <ListIcon as={TbReportAnalytics} />
                        Báo cáo thi
                      </Link>
                    </ListItem>
                  </List>
                  {location.pathname === Pages.HOME && accountAccepted && (
                    <ExportAll />
                  )}
                  <Button onClick={handleSignOut} colorScheme="red" w="100%">
                    Đăng xuất
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
