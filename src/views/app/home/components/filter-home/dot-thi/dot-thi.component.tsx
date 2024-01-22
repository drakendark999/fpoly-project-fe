import React, { ChangeEvent } from 'react';
import { Checkbox, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import { customStyles } from '@src/theme/components/form';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectorAllDotThi,
  getSelectorFilterDotThi_LichThi2,
} from '@src/selector/selectorLichThi2';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';

const DotThi: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const all_dot_thi = useSelector(getSelectorAllDotThi);
  const get_dot_thi_filter = useSelector(getSelectorFilterDotThi_LichThi2);

  const handleChangeStatus = (
    dot_thi: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.checked) {
      dispatch(
        lichThi2Action.addDotThiToFilterDotThi([
          ...get_dot_thi_filter,
          dot_thi,
        ]),
      );
    } else {
      dispatch(lichThi2Action.deleteDotThiFromFilterDotThi(dot_thi));
    }
  };

  return (
    <FormControl as="fieldset" sx={customStyles.formControl}>
      <FormLabel as="legend" sx={customStyles.formLabel}>
        Đợt thi
      </FormLabel>

      <HStack spacing="20px">
        {all_dot_thi.map((item, index) => {
          return (
            <Checkbox
              size="md"
              defaultChecked
              value={item.dot_Thi}
              key={`${index}_dot_thi_${item.id}`}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleChangeStatus(item.dot_Thi, e);
              }}>
              Đợt {item.dot_Thi}
            </Checkbox>
          );
        })}

        {/* {props.data.map((item, index) => {
          return (
            <Checkbox
              key={index}
              size="md"
              defaultChecked
              onChange={(e) => {
                handleChangeStatus(item.dot_Thi, e);
              }}
            >
              Đợt {item.dot_Thi}
            </Checkbox>
          );
        })} */}
      </HStack>
    </FormControl>
  );
};

export default DotThi;
