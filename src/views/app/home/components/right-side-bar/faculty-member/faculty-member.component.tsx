import { Checkbox } from '@chakra-ui/checkbox';
import { Flex } from '@chakra-ui/layout';
import React, { ChangeEvent } from 'react';
import { kind_of_gv } from '@src/core/data/kind-of-gv';
import { useDispatch } from 'react-redux';
import { giangVienAction } from '@src/core/store/reducer/giangvien';

const FacultyMember: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const changeDT = (vt: string, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(giangVienAction.addDtToFilterDT(vt));
    } else {
      dispatch(giangVienAction.deleteDTFromFilterDT(vt));
    }
  };

  return (
    <Flex justify="space-around" mt={3}>
      {kind_of_gv.map((item, index) => {
        return (
          <Checkbox
            key={`${item.name} ${index} `}
            defaultChecked
            onChange={(e) => {
              changeDT(item.vietTat, e);
            }}>
            {item.name}
          </Checkbox>
        );
      })}
    </Flex>
  );
};

export default FacultyMember;
