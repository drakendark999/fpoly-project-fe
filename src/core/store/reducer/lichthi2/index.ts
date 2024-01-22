import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { addGv2Action, lichThi2State, moveLichThiAction } from './types';
import {
  onThunkGetAllDotThi,
  onThunkGetAllNgayThi,
  onThunkGetDataLichThi2,
  onThunkGetDataLichThi2Busy,
  onThunkGetDataLichThi2Cancel,
  onThunkPutAllLichThi2,
} from './thunk';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import {
  BlockEnum,
  KhuVucEnum,
  StatusEnum,
  ToaNhaEmum,
} from '@src/core/libs/constants';
import { onThunkGetAllBoMon } from '../bomon/thunk';

const initialState: lichThi2State = {
  allLichThi2: [],
  allLichThi2Cancel: [],
  allLichThi2Busy: [],
  allNgayThi: [],
  allDotThi: [],
  filter_lichthi2: {
    date: '',
    bo_mon: [],
    toa_nha: ToaNhaEmum.toa_F,
    block: BlockEnum.B1,
    khu_vuc: KhuVucEnum.pmqt,
    ca_thi: [1, 2, 3, 4, 5, 6],
    dot_thi: [],
  },
  reset_screen: 0,
};

const lichThi2Slice = createSlice({
  name: 'lichthi2',
  initialState: initialState,

  reducers: {
    testLichthi2: (state, action: PayloadAction<LichThi2Model>) => {
      state.allLichThi2 = state.allLichThi2 = [
        ...(state.allLichThi2 || []),
        action.payload,
      ];
    },

    addToaNhaToFIlterToaNha: (state, action: PayloadAction<number>) => {
      state.filter_lichthi2.toa_nha = action.payload;
    },

    addDateToFIlterDate: (state, action: PayloadAction<string>) => {
      state.filter_lichthi2.date = action.payload;
    },

    addBoMonToFilterBoMon: (state, action: PayloadAction<string>) => {
      state.filter_lichthi2.bo_mon = [
        ...state.filter_lichthi2.bo_mon,
        action.payload,
      ];
    },

    addBoMonToFilterMulBoMon: (state, action: PayloadAction<string[]>) => {
      state.filter_lichthi2.bo_mon = [...action.payload];
    },

    addKhuVuctoFilterKhuVuc: (state, action: PayloadAction<string>) => {
      state.filter_lichthi2.khu_vuc = action.payload;
    },

    addDotThiToFilterDotThi: (state, action: PayloadAction<number[]>) => {
      state.filter_lichthi2.dot_thi = action.payload;
    },

    deleteDotThiFromFilterDotThi: (state, action: PayloadAction<number>) => {
      const new_dot_thi_filter = state.filter_lichthi2.dot_thi.filter(
        (item) => {
          return item === action.payload ? false : true;
        },
      );

      state.filter_lichthi2.dot_thi = new_dot_thi_filter;
    },

    deleteBoMonFromFilterBoMon: (state, action: PayloadAction<string>) => {
      state.filter_lichthi2.bo_mon = state.filter_lichthi2.bo_mon.filter(
        (e) => e !== action.payload,
      );
    },

    addGv2: (state, action: PayloadAction<addGv2Action>) => {
      const foundElement = state.allLichThi2.find(
        (e: LichThi2Model) => e.id == action.payload.id,
      );

      if (foundElement) {
        foundElement.GV2 = action.payload.nameDrag;
        foundElement.status_GV2 = '';
      }
    },

    editGv2: (state, action) => {
      const findGv = state.allLichThi2.find(
        (e) =>
          ((e.ngay_Thi.includes(action.payload.ngay_Thi) &&
            e.GV1 == action.payload.MaNV) ||
            e.GV2 == action.payload.MaNV) &&
          e.ca_Thi == action.payload.ca,
      );
      if (!findGv) {
        const findFirst = state.allLichThi2.find(
          (e) => e.id == action.payload.idFirst,
        );
        const findSecond = state.allLichThi2.find(
          (e) => e.id == action.payload.idSecond,
        );
        if (findFirst && findSecond) {
          findSecond.GV2 = findFirst.GV2;
          findFirst.GV2 = '';
        }
      }
      console.log(findGv);
    },

    deleteGv2: (state, action: PayloadAction<number>) => {
      const find_data = state.allLichThi2.find((e) => e.id == action.payload);
      if (find_data) find_data.GV2 = '';
      // state.allLichThi2.find((e) => e.id == action.payload.id).GV2 = '';
    },

    setCa: (state, action) => {
      // console.log('action',action.payload)
      state.filter_lichthi2.ca_thi = action.payload;
      // console.log('state',current(state.filter.ca))
    },
    setBlock: (state, action: PayloadAction<BlockEnum>) => {
      state.filter_lichthi2.block = action.payload;
    },
    moveLichThi: (state, action: PayloadAction<moveLichThiAction>) => {
      const find_lichthi = state.allLichThi2.find(
        (e) => e.id === action.payload.id,
      );
      const check_lichthi = state.allLichThi2.some((e) => {
        return (
          e.ngay_Thi.includes(action.payload.ngay_Thi) &&
          e.ca_Thi === action.payload.ca_Thi &&
          e.ten_Phong.includes(action.payload.ten_Phong)
        );
      });
      if (!check_lichthi) {
        if (find_lichthi) {
          find_lichthi.ca_Thi = action.payload.ca_Thi;
          find_lichthi.ngay_Thi = new Date(
            action.payload.ngay_Thi,
          ).toISOString();
          find_lichthi.ten_Phong = action.payload.ten_Phong;
          find_lichthi.idToa_Nha = action.payload.idToa_Nha;
          console.log('tìm ok ', current(find_lichthi));
        } else {
          return alert('Không tìm thấy lịch thi này');
        }
      } else {
        return alert('Có lịch trùng rồi  !');
      }
    },
    statusGv1: (state, action) => {
      // console.log(action.payload.status);
      if (action.payload.status.trim() === StatusEnum.BUSY) {
        const find_data = state.allLichThi2.find(
          (e) => e.id == action.payload.id,
        );
        if (find_data) find_data.GV1 = '';
        // state.allLichThi2.find((e) => e.id == action.payload.id).GV1 = '';
        const GV1_busy = find_data ? find_data.GV1_busy : '';
        if (!GV1_busy) {
          if (find_data) find_data.GV1_busy = action.payload.GV1;
          console.log(
            'hiện tại',
            current(state.allLichThi2.find((e) => e.id === action.payload.id)),
          );
        } else {
          const allLichThi2GV1Busy = find_data
            ? find_data.GV1_busy.split(',')
            : [];
          allLichThi2GV1Busy.push(action.payload.GV1);
          const unMatchallLichThi2GV1Busy = [...new Set(allLichThi2GV1Busy)];
          if (find_data)
            find_data.GV1_busy = unMatchallLichThi2GV1Busy.join(',');
          // console.log(GV1_busy);
        }
      } else {
        const find_data = state.allLichThi2.find(
          (e) => e.id == action.payload.id,
        );
        if (find_data) find_data.GV2 = '';
      }

      // state.allLichThi2.find((e) => e.id == action.payload.id).GV1 = "";
      const find_data = state.allLichThi2.find(
        (e) => e.id == action.payload.id,
      );
      if (find_data) {
        find_data.status_GV1 = action.payload.status.trim();
        if (action.payload.status.trim() === StatusEnum.BUSY) {
          find_data.status_cancel = action.payload.status.trim();
        }
      }
      console.log(
        current(state.allLichThi2.find((e) => e.id == action.payload.id)),
      );
    },
    statusGv2: (state, action) => {
      //   console.log(action);
      const find_data = state.allLichThi2.find(
        (e) => e.id == action.payload.id,
      );

      if (find_data) {
        find_data.GV2 = '';
        find_data.status_GV2 = action.payload.status;
      }
      // state.allLichThi2.find((e) => e.id == action.payload.id).GV2 = '';
      // state.allLichThi2.find((e) => e.id == action.payload.id).status_GV2 =
      //   action.payload.status;
      console.log(
        current(state.allLichThi2.find((e) => e.id == action.payload.id)),
      );
    },
    resetScreen: (state, action: PayloadAction<number>) => {
      state.reset_screen = action.payload;
    },
    acceptToCancelCaThi: (state, action) => {
      const match = state.allLichThi2Cancel.find(
        (e) => e.id === action.payload.id,
      );
      if (match) {
        match.ghiChu = match.GV1;
        match.GV1 = '';
        match.status_cancel = StatusEnum.CANCEL;
      }

      console.log('tìm', current(match));
    },
    recoverCathi: (state, action) => {
      const match = state.allLichThi2Cancel.find(
        (e) => e.id == action.payload.id,
      );
      if (match) {
        match.GV1 = match.ghiChu;
        match.ghiChu = '';
        match.status_cancel = '';
        match.status_GV1 = '';
      }

      console.log('tìm', current(match));
    },
    deleteCancelLichThi: (state, action) => {
      const match = state.allLichThi2Cancel.find(
        (e) => e.id == action.payload.id,
      );
      if (match) {
        console.log('ok');
        match.status_GV1 = '';
      }
    },
  },

  extraReducers: (builder) => {
    builder
      // Get data lich thi 2
      .addCase(onThunkGetDataLichThi2.fulfilled, (state, action) => {
        state.allLichThi2 = action.payload;
      })
      // Get all data ngay thi
      .addCase(onThunkGetAllNgayThi.fulfilled, (state, action) => {
        state.allNgayThi = action.payload;
      })
      // Get all data dot thi
      .addCase(onThunkGetAllDotThi.fulfilled, (state, action) => {
        state.allDotThi = action.payload;
        state.filter_lichthi2.dot_thi = state.allDotThi.map((e) => e.dot_Thi);
      })

      .addCase(onThunkGetAllBoMon.fulfilled, (state, action) => {
        state.filter_lichthi2.bo_mon = action.payload.map((e) => e.tenTat);
      })

      .addCase(onThunkPutAllLichThi2.fulfilled, () => {
        // alert('Upload lịch thi thành công');
      })

      .addCase(
        onThunkGetDataLichThi2Cancel.fulfilled,
        (state, action: PayloadAction<LichThi2Model[]>) => {
          state.allLichThi2Cancel = action.payload;
        },
      )

      .addCase(
        onThunkGetDataLichThi2Busy.fulfilled,
        (state, action: PayloadAction<LichThi2Model[]>) => {
          state.allLichThi2Busy = action.payload;
        },
      );
  },
});

export const lichThi2Reudcer = lichThi2Slice.reducer;
export const lichThi2Action = lichThi2Slice.actions;
export default lichThi2Slice;
