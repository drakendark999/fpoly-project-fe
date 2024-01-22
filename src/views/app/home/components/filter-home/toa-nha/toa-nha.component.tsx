import React from 'react';
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { customStyles } from '@src/theme/components/form';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorAllToaNha } from '@src/selector/selectorToaNha';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { phongAction } from '@src/core/store/reducer/phong';
import {
  getSelectorFilterKhuVuc_LichThi2,
  getSelectorFilterToaNha_LichThi2,
} from '@src/selector/selectorLichThi2';

interface ToaNhaProps {
  title: string;
}

type Props = ToaNhaProps;

const ToaNha: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const allDataToaNha = useSelector(getSelectorAllToaNha);
  const value_toaNha = useSelector(getSelectorFilterToaNha_LichThi2);
  const khuVuc = useSelector(getSelectorFilterKhuVuc_LichThi2);
  const toaNha: any = allDataToaNha.filter((e) => e.idKhuVuc == 1);
  const toaNha2: any = allDataToaNha.filter((e) => e.idKhuVuc == 2);

  const handleChangeToanha = (e: string) => {
    dispatch(phongAction.addToaNhaToFilterPhong(Number(e)));
    dispatch(lichThi2Action.addToaNhaToFIlterToaNha(Number(e)));
  };

  return (
    <FormControl as="fieldset" sx={customStyles.formControl}>
      <FormLabel as="legend" sx={customStyles.formLabel}>
        Tòa nhà
      </FormLabel>

      <RadioGroup
        defaultValue={value_toaNha.toString()}
        onChange={handleChangeToanha}>
        <HStack spacing="24px">
          {khuVuc === 'pmqt'
            ? toaNha.map((e: any, index: any) => (
                <Radio
                  key={`${e.tenToaNha}_${index}`}
                  value={e.id.toString().trim()}>
                  {e.tenToaNha}
                </Radio>
              ))
            : toaNha2.map((e: any, index: any) => (
                <Radio
                  key={`${e.tenToaNha}_${index}`}
                  value={e.id.toString().trim()}
                  _selected={e.tenToaNha[0]}>
                  {e.tenToaNha}
                </Radio>
              ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export default ToaNha;
