import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import {
  addCaRanhGv2Action,
  addCabanAction,
  caRanhState,
  dragToAddCaBanGvAction,
  updateCaBanAction,
} from './types';
import {
  onThunkGetAllDataCaRanh,
  onThunkGetCaRanhGv,
  onThunkPutAllCaRanh,
} from './thunk';
import { CaRanhModel } from '@src/core/models/caranh/ca-ranh.model';

const initialState: caRanhState = {
  all_ca_ranh: [],
  ca_ranh_gv: [],
  filter_caranh: {
    date: '',
  },
};

const caRanhSlice = createSlice({
  name: 'caranh',
  initialState: initialState,

  reducers: {
    addCaRanhGv2: (
      state: caRanhState,
      action: PayloadAction<addCaRanhGv2Action>,
    ) => {
      const findGv = state.all_ca_ranh.find((e) => {
        return (
          e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
          e.MaNV === action.payload.MaNV
        );
      });
      if (findGv) {
        findGv.caXacNhan = findGv.caXacNhan
          .split(',')
          .filter((e) => e !== action.payload.ca.toString())
          .join(',');
      }
    },
    addCaban: (state, action: PayloadAction<addCabanAction>) => {
      const match = state.all_ca_ranh.find(
        (e) =>
          e.ngay_Thi.includes(action.payload.ngay_Thi) &&
          e.MaNV == action.payload.MaNV,
      );
      console.log('match', match?.id);

      if (match) {
        console.log('upload ca bận', action.payload);
        // match.caXacNhan = action.payload.caXacNhan;
      } else {
        console.log('thêm ca bận', action.payload);
        const findDataMaKyThi = state.all_ca_ranh.find((e) =>
          e.ngay_Thi.includes(action.payload.ngay_Thi),
        );
        console.log(findDataMaKyThi);
        if (findDataMaKyThi) {
          const newData = {
            ...state.all_ca_ranh[0],
            idKhu_Vuc: findDataMaKyThi.idKhu_Vuc,
            maKy_Thi: findDataMaKyThi.maKy_Thi,
            id: state.all_ca_ranh[state.all_ca_ranh.length - 1].id + 1,
            MaNV: action.payload.MaNV,
            ngay_Thi: action.payload.ngay_Thi,
            caXacNhan: action.payload.caXacNhan,
          };
          state.ca_ranh_gv.push(newData);
          state.all_ca_ranh.push(newData);
          console.log(newData);
        }
      }
    },
    addDateToFIlterDate: (
      state: caRanhState,
      action: PayloadAction<string>,
    ) => {
      state.filter_caranh.date = action.payload;
    },

    dragToAddCaBanGv: (
      state: caRanhState,
      action: PayloadAction<dragToAddCaBanGvAction>,
    ) => {
      const findGv = state.all_ca_ranh.find(
        (e) =>
          e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
          e.MaNV == action.payload.MaNV,
      );
      if (findGv) {
        findGv.caXacNhan = action.payload.caXacNhan;
      } else {
        const findDataMaKyThi = state.all_ca_ranh.find((e) =>
          e.ngay_Thi?.includes(action.payload.ngay_Thi),
        );
        const newData: CaRanhModel = {
          ...state.all_ca_ranh[0],
          idKhu_Vuc: findDataMaKyThi?.idKhu_Vuc
            ? findDataMaKyThi?.idKhu_Vuc
            : '',
          maKy_Thi: findDataMaKyThi?.maKy_Thi ? findDataMaKyThi?.maKy_Thi : '',
          id: state.all_ca_ranh[state.all_ca_ranh.length - 1].id + 1,
          MaNV: action.payload.MaNV,
          ngay_Thi: action.payload.ngay_Thi,
          caXacNhan: action.payload.caXacNhan,
        };

        state.all_ca_ranh = [...state.all_ca_ranh, newData];
      }
      if (action.payload.oldMaNV) {
        const findOldGv = state.all_ca_ranh.find(
          (e) =>
            e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
            e.MaNV == action.payload.oldMaNV,
        );
        if (findOldGv) {
          findOldGv.caXacNhan = findOldGv?.caXacNhan.replace(
            `${action.payload.ca}`,
            '',
          );
        }
      }
    },

    dragFixCaBan: (state, action) => {
      const findGv = state.all_ca_ranh.find(
        (e) =>
          e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
          e.MaNV == action.payload.MaNV,
      );
      if (findGv?.caXacNhan.includes(action.payload.ca)) {
        return alert('Giảng viên này có ca rồi nha');
      }

      if (findGv) {
        findGv.caXacNhan += `,${action.payload.ca}`;
        const arrayCaXacNhan = findGv.caXacNhan.split(',');
        findGv.caXacNhan = arrayCaXacNhan
          .filter((e) => e != action.payload.caOld)
          .join(',');
      }

      if (action.payload.oldMaNV) {
        const findOldGv = state.all_ca_ranh.find(
          (e) =>
            e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
            e.MaNV == action.payload.oldMaNV,
        );
        if (findOldGv) {
          findOldGv.caXacNhan = findOldGv.caXacNhan.replace(
            `${action.payload.ca}`,
            '',
          );
        } else {
          const findDataMaKyThi = state.all_ca_ranh.find((e) =>
            e.ngay_Thi?.includes(action.payload.ngay_Thi),
          );
          const newData: CaRanhModel = {
            ...state.all_ca_ranh[0],
            idKhu_Vuc: findDataMaKyThi?.idKhu_Vuc
              ? findDataMaKyThi?.idKhu_Vuc
              : '',
            maKy_Thi: findDataMaKyThi?.maKy_Thi
              ? findDataMaKyThi?.maKy_Thi
              : '',
            id: state.all_ca_ranh[state.all_ca_ranh.length - 1].id + 1,
            MaNV: action.payload.MaNV,
            ngay_Thi: action.payload.ngay_Thi,
            caXacNhan: action.payload.caXacNhan,
          };
          console.log('new', newData);
          state.all_ca_ranh = [...state.all_ca_ranh, newData];
        }
      }
    },
    moveCaBanGiangVien: (state, action) => {
      console.log('old', action.payload.oldNgayThi);
      if (action.payload.oldNgayThi.includes(action.payload.ngay_Thi)) {
        const findGv = state.all_ca_ranh.find(
          (e) =>
            e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
            e.MaNV === action.payload.MaNV,
        );
        if (findGv) {
          findGv.caXacNhan += `,${action.payload.ca}`;
          const arrayCaXacNhan = findGv.caXacNhan.split(',');
          findGv.caXacNhan = arrayCaXacNhan
            .filter((e) => e != action.payload.caOld)
            .join(',');
        }
        console.log('trung2 ngay');
      } else {
        console.log('khac ngay');

        console.log('old', action.payload.oldNgayThi);
        console.log('new', action.payload.ngay_Thi);
        const findGv_oldNgayThi = state.all_ca_ranh.find(
          (e) =>
            e.ngay_Thi?.includes(action.payload.oldNgayThi) &&
            e.MaNV === action.payload.MaNV,
        );

        const findGv_newNgayThi = state.all_ca_ranh.find(
          (e) =>
            e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
            e.MaNV === action.payload.MaNV,
        );
        // console.log('truoc khi xu ly', current(findGv_oldNgayThi));

        if (findGv_oldNgayThi) {
          findGv_oldNgayThi.caXacNhan = findGv_oldNgayThi.caXacNhan
            .split(',')
            .filter((e) => e !== action.payload.caOld.toString())
            .join(',');
        }

        // console.log('sau khi', current(findGv_oldNgayThi));

        if (findGv_newNgayThi) {
          console.log('tim thay r', action.payload.caOld);
          findGv_newNgayThi.caXacNhan += `,${action.payload.caOld}`;

          console.log('dwdwa', current(findGv_newNgayThi));
        } else {
          console.log('khong tim thay');

          const findDataMaKyThi = state.all_ca_ranh.find((e) =>
            e.ngay_Thi?.includes(action.payload.ngay_Thi),
          );
          const newData: CaRanhModel = {
            ...state.all_ca_ranh[0],
            idKhu_Vuc: findDataMaKyThi?.idKhu_Vuc
              ? findDataMaKyThi?.idKhu_Vuc
              : '',
            maKy_Thi: findDataMaKyThi?.maKy_Thi
              ? findDataMaKyThi?.maKy_Thi
              : '',
            id: state.all_ca_ranh[state.all_ca_ranh.length - 1].id + 1,
            MaNV: action.payload.MaNV,
            ngay_Thi: new Date(action.payload.ngay_Thi).toISOString(),
            caXacNhan: `${action.payload.ca}`,
          };
          console.log('newdwdwd', newData);
          state.all_ca_ranh = [...state.all_ca_ranh, newData];
          // console.log('new', current(state.all_ca_ranh));
        }
      }
      // const findGv = state.all_ca_ranh.find(
      //   (e) =>
      //     e.ngay_Thi?.includes(action.payload.ngay_Thi) &&
      //     e.MaNV === action.payload.MaNV,
      // );
      // if (findGv) {
      //   findGv.caXacNhan += `,${action.payload.ca}`;
      //   const arrayCaXacNhan = findGv.caXacNhan.split(',');
      //   findGv.caXacNhan = arrayCaXacNhan
      //     .filter((e) => e != action.payload.caOld)
      //     .join(',');
      // } else {
      //   console.log('khnog tim thay');
      //   const findDataMaKyThi = state.all_ca_ranh.find((e) =>
      //     e.ngay_Thi?.includes(action.payload.ngay_Thi),
      //   );
      //   const newData: CaRanhModel = {
      //     ...state.all_ca_ranh[0],
      //     idKhu_Vuc: findDataMaKyThi?.idKhu_Vuc
      //       ? findDataMaKyThi?.idKhu_Vuc
      //       : '',
      //     maKy_Thi: findDataMaKyThi?.maKy_Thi ? findDataMaKyThi?.maKy_Thi : '',
      //     id: state.all_ca_ranh[state.all_ca_ranh.length - 1].id + 1,
      //     MaNV: action.payload.MaNV,
      //     ngay_Thi: action.payload.ngay_Thi,
      //     caXacNhan: `${action.payload.ca}`,
      //   };
      //   // console.log('new', current(state.all_ca_ranh));
      //   // console.log('newdwdwd', newData);
      //   state.all_ca_ranh = [...state.all_ca_ranh, newData];
      // }

      // console.log('findGv', current(findGv));
      // console.log('all', current(state.all_ca_ranh));
    },

    updateCaBan: (state, action: PayloadAction<updateCaBanAction>) => {
      const find_caranh = state.ca_ranh_gv.find(
        (e) => e.id === action.payload.id,
      );
      if (find_caranh) {
        find_caranh.caXacNhan = '';
        find_caranh.caXacNhan = action.payload.caBanUpdate;
        console.log(
          'find_caranh',
          current(state.ca_ranh_gv.find((e) => e.id === action.payload.id)),
        );
      }
      // state.ca_ranh_gv.find((e) => e.id == action.payload.id).caXacNhan =
      //   action.payload.caBanUpdate;
    },
    cancelCaRanhGV2: (state, action) => {
      const findGv = state.all_ca_ranh.find(
        (e) =>
          e.ngay_Thi.includes(action.payload.ngay_Thi) &&
          e.MaNV == action.payload.GV2,
      );
      if (findGv) {
        const ca_ranh_gv = findGv.caXacNhan.split(',');
        const ca_ranh_new = ca_ranh_gv
          .filter((e) => e != action.payload.ca_Thi)
          .join(',');
        findGv.caXacNhan = ca_ranh_new;
        state.ca_ranh_gv.push(findGv);
        console.log('caranh', current(findGv));
      }
    },
    acceptCancelCaRanh: (state, action) => {
      const match = state.all_ca_ranh.find(
        (e) =>
          e.ngay_Thi.includes(action.payload.ngay_Thi) &&
          e.MaNV === action.payload.MaNV,
      );
      if (match) {
        const arrayCaXacNhan = [...new Set(match.caXacNhan.split(','))].filter(
          (e) => e != action.payload.caXacNhan,
        );
        match.caXacNhan = arrayCaXacNhan.join(',');
        console.log('ca moi', match.caXacNhan);
      }
    },
    recoveyCaRanhCancel: (state, action) => {
      const match = state.all_ca_ranh.find((e) => {
        return (
          e.ngay_Thi.includes(action.payload.ngay_Thi) &&
          e.MaNV === action.payload.MaNV
        );
      });
      if (match) {
        console.log('ca cu', match.caXacNhan);
        match.caXacNhan = `${match.caXacNhan},${action.payload.caXacNhan}`;
        console.log('ca cu', match.caXacNhan);
      }
      console.log('dwadaw', match);
    },
  },

  extraReducers: (builder) => {
    builder
      // Get data all giang vien
      .addCase(
        onThunkGetAllDataCaRanh.fulfilled,
        (state, action: PayloadAction<CaRanhModel[]>) => {
          state.all_ca_ranh = action.payload;
        },
      )

      .addCase(
        onThunkGetCaRanhGv.fulfilled,
        (state, action: PayloadAction<CaRanhModel[]>) => {
          state.ca_ranh_gv = action.payload;
        },
      )
      .addCase(onThunkPutAllCaRanh.fulfilled, () => {
        // alert('Upload ca rãnh thành công');
      });

    // Get data ngay thi 2
  },
});

export const caRanhReducer = caRanhSlice.reducer;
export const caRanhAction = caRanhSlice.actions;
export default caRanhSlice;
