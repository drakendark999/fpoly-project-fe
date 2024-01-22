import React, { useMemo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { GiangVienModel } from '@src/core/models/giangvien/giangvien.model';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { getSelectorFilterCaThi_LichThi2 } from '@src/selector/selectorLichThi2';

interface GiangVienProps {
  infor_giangvien: GiangVienModel;
  date: string;
  status_ca_gv: statusCaGV;
}

type Props = GiangVienProps;

interface statusCaGV {
  caRanh: number[];
  caBan: string[];
}
export interface DragBoxModel {
  name: string;
  date: string;
  caBan: string[];
}

const GiangVien: React.FunctionComponent<Props> = (props) => {
  const { infor_giangvien, status_ca_gv, date } = props;
  const ca_thi_list = useSelector(getSelectorFilterCaThi_LichThi2);

  const check = status_ca_gv.caRanh.some((e) => ca_thi_list.includes(e));

  const styles: React.CSSProperties = {
    border: '2px dashed gray',
    padding: '10px 20px',
  };

  const [{ isDragging }, drag] = useDrag(
    useMemo(() => {
      return {
        type: 'box',
        item: {
          name: infor_giangvien.MaNV || '',
          date: date,
          caBan: status_ca_gv.caBan,
        } as DragBoxModel,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      };
    }, [infor_giangvien, date, status_ca_gv.caRanh]),
  );

  if (isDragging) {
    styles.opacity = 0.5;
    styles.transform = 'scale(0.8)';
    styles.cursor = 'grabbing';
  } else {
    styles.cursor = 'grab';
  }

  return (
    <>
      {check && (
        <Box layerStyle="teacher" ref={drag} style={styles}>
          <Flex justify="space-between">
            <Text id="tenGV" as="b">
              {/* {data.MaNV} */}
              {infor_giangvien.MaNV}
            </Text>
            <Text id="boMon" as="abbr">
              {/* <span>{data.BoMon}</span> */}
              <span>{infor_giangvien.BoMon}</span>
            </Text>
          </Flex>
          <Text id="hoTen" as="i" fontSize="0.95rem" display="block" mt={1}>
            {/* {data.hoVaTen} */}
            {infor_giangvien.hoVaTen}
          </Text>
          <Text fontSize="0.95rem" display="block">
            {/* Đã xếp: <strong>{data.count}</strong> ca */}
            Đã xếp: <strong>{infor_giangvien.count}</strong> ca
          </Text>
          <Flex justify="space-between">
            <Text id="caRanh" display="block">
              {/* Ca rảnh: <strong>{caRanh.join(',')}</strong> */}
              Ca rảnh: <strong>{status_ca_gv.caRanh.join(',')}</strong>
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default GiangVien;
