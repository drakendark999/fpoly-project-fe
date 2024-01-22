import React, { ChangeEvent, useEffect, useState } from 'react';
import { customStyles } from '@src/theme/components/form';
import { Checkbox, FormControl, FormLabel, Grid } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorAllBoMon } from '@src/selector/selectorBoMon';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import {
  getDataLichThi2HandleFIlter,
  getSelectorFilterBoMon_LichThi2,
} from '@src/selector/selectorLichThi2';
import { getSelectorAccount } from '@src/selector/selectorAccount';

import { allowGvBySubject } from '@src/core/data/allow-gv';
import { jwtAccount } from '@src/core/libs/ultis';
import { Subject } from '@src/core/libs/constants';

const BoMon: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const allBomon = useSelector(getSelectorAllBoMon);
  const filterArray = useSelector(getDataLichThi2HandleFIlter);
  // const nganhDefault = filterArray.map((e) => e.bo_Mon);
  const nganhLT1 = useSelector(getSelectorFilterBoMon_LichThi2);

  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  // const [accountAccepted, setAccountAccepted] = useState(
  //   allowGv.includes(MaGV),
  // );
  // console.log('accountAccepted', accountAccepted);

  const boMonCQBL = allowGvBySubject.find((e) => e.gv === MaGV);

  const boMonNoAccept = {
    gv: MaGV,
    cnbm: [
      Subject.TMĐT,
      Subject.TA,
      Subject.TKĐH,
      Subject.UDPM,
      Subject.KT,
      Subject.DLNHKS,
      Subject.CB,
      Subject.DIEN,
      Subject.CK,
      Subject.CNTT,
    ],
  };

  const [boMonAccept, setBoMonAccept] = useState(boMonCQBL);

  const handleCheckboxChange = (d: React.ChangeEvent<HTMLInputElement>) => {
    if (d.target.checked) {
      setBoMonAccept(boMonNoAccept);
    } else {
      setBoMonAccept(boMonCQBL);
    }
  };

  useEffect(() => {
    let dataNew = [];
    if (boMonAccept) {
      dataNew = boMonAccept.cnbm;
    } else {
      dataNew = allBomon.map((e) => e.tenTat);
    }
    dispatch(lichThi2Action.addBoMonToFilterMulBoMon(dataNew));
  }, [allBomon, boMonAccept]);

  let nganhDefault: string | string[] = [];
  if (boMonAccept) {
    const nganhSet = new Set(filterArray.map((e) => e.bo_Mon));
    nganhDefault = boMonAccept.cnbm.filter((boMon: Subject) =>
      nganhSet.has(boMon),
    );
  } else {
    nganhDefault = filterArray.map((e) => e.bo_Mon);
  }

  const handleChangeBoMon = (
    name_bomon: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.checked) {
      dispatch(lichThi2Action.addBoMonToFilterBoMon(name_bomon));
    } else {
      dispatch(lichThi2Action.deleteBoMonFromFilterBoMon(name_bomon));
    }
  };

  return (
    <FormControl as="fieldset" sx={customStyles.formControl}>
      <FormLabel as="legend" sx={customStyles.formLabel}>
        Bộ Môn{' '}
        {boMonCQBL && (
          <Checkbox
            size="md"
            marginTop={'2px'}
            onChange={(e) => {
              handleCheckboxChange(e);
            }}
          />
        )}
      </FormLabel>

      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {allBomon.map((item, index) => {
          const itemTenTat = item.tenTat;
          const isChecked = nganhDefault.includes(itemTenTat);
          const isNoChecked = isChecked || nganhLT1.includes(item.tenTat);
          const textStyle = {
            color: isChecked ? 'red' : isNoChecked ? 'black' : 'blue',
          };

          return (
            <Checkbox
              isChecked={isChecked}
              key={`${index}_${item.id}_${item.tenTat}`}
              size="md"
              style={textStyle}
              onChange={(e) => handleChangeBoMon(item.tenTat, e)}>
              {item.tenTat}
            </Checkbox>
          );
        })}
      </Grid>
    </FormControl>
  );
};

export default BoMon;
