import { Flex, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import logo from '@src/assets/logoFEF.png';
import KhuVuc from './khu-vuc/khu-vuc.component';
import ContentBox from './content-box/content-box.component';
import DateTime from './date-time/date-time.component';
import SaveSchedule from './save-schedule/save-schedule.component';
import { useSelector } from 'react-redux';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { jwtAccount } from '@src/core/libs/ultis';
import { getSelectorAllKyThi } from '@src/selector/selectorKyThi';

const Header: React.FunctionComponent = () => {
  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  const maKyThi = useSelector(getSelectorAllKyThi);
  const [textContent, setTextContent] = useState('');
  useEffect(() => {
    if (maKyThi.length > 0) {
      let seasonDefault = maKyThi[0]?.maHocKy.slice(0, 2);
      if (seasonDefault === 'sp') {
        seasonDefault = 'Spring';
      } else if (seasonDefault === 'su') {
        seasonDefault = 'Summer';
      } else {
        seasonDefault = 'Fall';
      }
      const yearDefault = maKyThi[0].maHocKy.slice(2, 4);

      const newTextContent = seasonDefault.concat(' 20' + yearDefault);
      setTextContent(newTextContent);
    }
  }, [maKyThi]);

  return (
    <Flex justify="space-between" align="center">
      <Image w={160} src={logo} alt="logo" />
      <DateTime />
      <KhuVuc />
      <ContentBox title="Học kỳ" content={textContent} />
      <ContentBox title="User" content={MaGV} />
      <SaveSchedule />
    </Flex>
  );
};

export default Header;
