import { GridItem, Box, Text } from '@chakra-ui/react';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import React, { useMemo } from 'react';
import Gv2Box, { DragBoxFixModel } from './gv2-box.component';
import { useDrop } from 'react-dnd';
import { DragBoxModel } from '../right-side-bar/giangvien/giangvien.component';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { useDispatch, useSelector } from 'react-redux';
import { giangVienAction } from '@src/core/store/reducer/giangvien';
import { caRanhAction } from '@src/core/store/reducer/caranh';
import Reschedule from '../reschedule/reschedule.component';
import { getDataLichThi2HandleFIlter } from '@src/selector/selectorLichThi2';
import { StatusEnum } from '@src/core/libs/constants';
import { allowGvBySubject } from '@src/core/data/allow-gv';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { jwtAccount } from '@src/core/libs/ultis';
// import moment from 'moment';

interface TableBoxModel {
  data_sort_base_cathi: LichThi2Model[];
  caThi: number;
  data_table_box: LichThi2Model | object;
}
type Props = TableBoxModel;

const TableBox: React.FunctionComponent<Props> = (props) => {
  // const { caThi, data_sort_base_cathi, data_table_box } = props;
  const { data_table_box, data_sort_base_cathi, caThi } = props;

  const dispatch = useDispatch();
  const data_lichthi_change_base_ngayThi = useSelector(
    getDataLichThi2HandleFIlter,
  );

  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);

  const boMonAccept = allowGvBySubject.find((e) => e.gv === MaGV);

  // const currentTime: any = moment();
  // const dataNgayThi = (data_table_box as LichThi2Model).ngay_Thi;
  // const ngayThi: any = moment(dataNgayThi, 'YYYY-MM-DD HH:mm:ss');
  // const duration: any = moment.duration(ngayThi.diff(currentTime));

  const [, drop] = useDrop(
    useMemo(
      () => ({
        accept: 'box',
        drop: (item: DragBoxModel) => {
          // if (duration < 0) {
          //   alert('Đã đến ngày thi, không thể phân công giảng viên 2');
          //   return;
          // }
          if (!boMonAccept) {
            return alert(
              'Bạn chưa được làm chủ nhiệm bộ môn, hãy liên hệ trường để đăng ký ',
            );
          } else {
            if (
              !boMonAccept.cnbm.includes(
                (data_table_box as LichThi2Model).bo_Mon,
              )
            ) {
              return alert(
                `Bạn chỉ được phân công ở bộ môn ${boMonAccept.cnbm.join(',')}`,
              );
            }
          }
          console.log({ caThi });
          if ((data_table_box as LichThi2Model).status_GV1 == 'cancel') {
            return alert('Ca thi này đã bị hủy');
          }
          console.log(item);
          const ifExistGV1 = data_sort_base_cathi.every(
            (i) => i.GV1 !== item.name,
          );
          const ifExistGV2 = data_sort_base_cathi.every(
            (i) => i.GV2 !== item.name,
          );
          if (
            ifExistGV1 &&
            ifExistGV2 &&
            !item.caBan.includes(caThi.toString())
          ) {
            item.caBan.push(caThi.toString());
            console.log('caBan', item.caBan.join(','));

            dispatch(
              caRanhAction.dragToAddCaBanGv({
                oldMaNV: (data_table_box as LichThi2Model).GV2,
                caXacNhan: item.caBan.join(','),
                ngay_Thi: (data_table_box as LichThi2Model).ngay_Thi,
                MaNV: item.name,
                ca: (data_table_box as LichThi2Model).ca_Thi.toString(),
              }),
            );
            addGv2(
              item.name,
              (data_table_box as LichThi2Model).id,
              (data_table_box as LichThi2Model).GV2,
            );
            // setIsDropped(true);
          } else {
            alert('GV này có ca rồi nha hoặc đã bận!');
          }
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      }),
      [data_table_box as LichThi2Model, (data_table_box as LichThi2Model).GV2],
    ),
  );

  const [, dropFix] = useDrop(
    useMemo(
      () => ({
        accept: 'boxFix',
        drop: (item: DragBoxFixModel) => {
          if ((data_table_box as LichThi2Model).status_GV1 == 'cancel') {
            return alert('Ca thi này đã bị hủy');
          }
          const ifExistGV1 = data_sort_base_cathi.every(
            (i) => i.GV1 != item.gv2,
          );
          const ifExistGV2 = data_sort_base_cathi.every(
            (i) => i.GV2 != item.gv2,
          );
          if (
            (ifExistGV1 && ifExistGV2) ||
            item.ca == (data_table_box as LichThi2Model).ca_Thi
          ) {
            dispatch(
              caRanhAction.dragFixCaBan({
                oldMaNV: (data_table_box as LichThi2Model).GV2,
                ngay_Thi: item.date,
                MaNV: item.gv2,
                ca: (data_table_box as LichThi2Model).ca_Thi.toString(),
                caOld: item.ca.toString(),
              }),
            );
            editGv2(
              item.id,
              (data_table_box as LichThi2Model).id,
              (data_table_box as LichThi2Model).GV2,
              item.gv2,
              (data_table_box as LichThi2Model).ca_Thi.toString(),
              item.date,
            );
            // setIsDropped(true);
          } else {
            alert('GV này có ca rồi nha!');
          }
          // editGv2(item.id, (item["nowId"] = data.id), data.GV2, item);
          // setIsDropped(true);
        },
        collect: (monitor) => ({
          isOverFix: !!monitor.isOver(),
        }),
      }),
      [data_table_box as LichThi2Model, data_lichthi_change_base_ngayThi],
    ),
  );

  const addGv2 = (nameDrag: string, id: number, oldMaNV: string) => {
    if ((data_table_box as LichThi2Model).GV2 != nameDrag) {
      dispatch(giangVienAction.increaseCount(nameDrag));
    }

    if (oldMaNV) {
      dispatch(giangVienAction.decreaseCount(oldMaNV));
    }

    dispatch(lichThi2Action.addGv2({ nameDrag, id }));
  };

  const editGv2 = (
    idFirst: number,
    idSecond: number,
    name: string,
    MaNV: string,
    ca: string,
    ngay_Thi: string,
  ) => {
    dispatch(
      lichThi2Action.editGv2({
        idFirst,
        idSecond,
        MaNV,
        ca,
        ngay_Thi,
      }),
    );
    if (name) {
      dispatch(giangVienAction.decreaseCount(name));
    }
  };

  return (
    <GridItem
      minH="140px"
      p={2}
      layerStyle="schedule"
      ref={drop}
      pos="relative">
      <Box borderBottom="1px" borderColor="black" minH="97px">
        {data_table_box && Object.keys(data_table_box).length > 0 ? (
          <>
            <Text id="boMon">
              <Text as={'span'} fontWeight={'bold'}>
                Bộ môn:
              </Text>
              {` ${(data_table_box as LichThi2Model).bo_Mon}`}
            </Text>
            <Text id="monHoc">{` ${
              (data_table_box as LichThi2Model).ma_Mon
            }`}</Text>
            <Text id="lop">{` ${
              (data_table_box as LichThi2Model).ma_Lop
            }`}</Text>
            {/* <Text id="giangVien">{data.gv1}</Text> */}
            <Text id="giangVien" cursor="pointer">
              {(data_table_box as LichThi2Model).GV1 ||
                ((data_table_box as LichThi2Model).status_cancel ===
                  StatusEnum.CANCEL && (
                  <Text as={'span'} color={'red'}>
                    {`Ca thi đã bị hủy(${
                      (data_table_box as LichThi2Model).ghiChu
                    })`}
                  </Text>
                )) ||
                ((data_table_box as LichThi2Model).status_GV1 ===
                  StatusEnum.BUSY && (
                  <Text as={'span'} color={'blue'}>
                    <Text as={'span'} color={'black'}>
                      ({(data_table_box as LichThi2Model).GV1_busy})
                      <br />
                    </Text>
                    <Text as={'i'} color={'blues'}>
                      giảng viên 1 bận
                    </Text>
                  </Text>
                ))}
              {/* {` ${(data_table_box as LichThi2Model).GV1}`} */}
            </Text>

            <Reschedule
              id_lichThi={(data_table_box as LichThi2Model).id}
              ngay_Thi={(data_table_box as LichThi2Model).ngay_Thi}
              ca_Thi={(data_table_box as LichThi2Model).ca_Thi}
              phong_Thi={(data_table_box as LichThi2Model).ten_Phong}
              toa_nha={(data_table_box as LichThi2Model).idToa_Nha}
              gv1={(data_table_box as LichThi2Model).GV1}
              gv2={(data_table_box as LichThi2Model).GV2}
            />
          </>
        ) : null}
      </Box>

      <div ref={dropFix}>
        <Box style={{ minHeight: '20px' }} mt={1} id="giangVien2">
          {data_table_box && Object.keys(data_table_box).length > 0 ? (
            <>
              <Gv2Box
                lichthi_id={(data_table_box as LichThi2Model).id}
                giangvien2={(data_table_box as LichThi2Model).GV2}
                ca_thi={(data_table_box as LichThi2Model).ca_Thi}
                ngay_thi={(data_table_box as LichThi2Model).ngay_Thi}
              />
            </>
          ) : null}
        </Box>
      </div>
    </GridItem>
  );
};

export default TableBox;
