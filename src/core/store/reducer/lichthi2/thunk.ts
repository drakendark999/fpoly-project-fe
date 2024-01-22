import { createAsyncThunk } from '@reduxjs/toolkit';
// import { PutAllLichThi2Result } from '@src/core/data-transfer/lichthi2/get-lichthi2.api-results';
import { DotThiModel } from '@src/core/models/dot-thi/dot-thi.component';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { NgayThiModel } from '@src/core/models/ngaythi/ngaythi.model';
import { DotThiService } from '@src/core/services/dot-thi.service';
import { LichThi2Service } from '@src/core/services/lichthi2.service';
import { NgayThiService } from '@src/core/services/ngaythi.service';

export const onThunkGetDataLichThi2 = createAsyncThunk<
  LichThi2Model[],
  void,
  { rejectValue: LichThi2Model[] }
>('lichThi2/getAllLichThi', async (_, { rejectWithValue }) => {
  try {
    const lichThi2Service = new LichThi2Service();
    const res = await lichThi2Service.getAllLichThi2();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as LichThi2Model[]);
  }
});

export const onThunkGetAllNgayThi = createAsyncThunk<
  NgayThiModel[],
  void,
  { rejectValue: NgayThiModel[] }
>('lichThi2/getAllNgayThi', async (_, { rejectWithValue }) => {
  try {
    const ngayThiService = new NgayThiService();
    const res = await ngayThiService.getAllNgayThi();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as NgayThiModel[]);
  }
});

export const onThunkGetAllDotThi = createAsyncThunk<
  DotThiModel[],
  void,
  { rejectValue: DotThiModel[] }
>('lichThi2/getAllDotThi', async (_, { rejectWithValue }) => {
  try {
    const dotThiService = new DotThiService();
    const res = await dotThiService.getAllDotThi();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as DotThiModel[]);
  }
});

export const onThunkPutAllLichThi2 = createAsyncThunk<
  void,
  LichThi2Model[],
  { rejectValue: string }
>(
  'lichThi2/putAllLichThi2',
  async (data: LichThi2Model[], { rejectWithValue }) => {
    try {
      const lichThiService = new LichThi2Service();
      const res = await lichThiService.putAllLichThi2(data);

      if (res.success) {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      rejectWithValue('not succes');
    }
  },
);

export const onThunkGetDataLichThi2Cancel = createAsyncThunk<
  LichThi2Model[],
  void,
  { rejectValue: LichThi2Model[] }
>('lichThi2/getAllLichThi2Cancel', async (_, { rejectWithValue }) => {
  try {
    const lichThi2Service = new LichThi2Service();
    const res = await lichThi2Service.getAllLichThi2Cancel();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as LichThi2Model[]);
  }
});

export const onThunkGetDataLichThi2Busy = createAsyncThunk<
  LichThi2Model[],
  void,
  { rejectValue: LichThi2Model[] }
>('lichThi2/getAllLichThi2Busy', async (_, { rejectWithValue }) => {
  try {
    const lichThi2Service = new LichThi2Service();
    const res = await lichThi2Service.getAllLichThi2Busy();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as LichThi2Model[]);
  }
});
