import { createAsyncThunk } from '@reduxjs/toolkit';
import { CaRanhModel } from '@src/core/models/caranh/ca-ranh.model';
import { CaRanhService } from '@src/core/services/ca-ranh.service';

export const onThunkGetAllDataCaRanh = createAsyncThunk<
  CaRanhModel[],
  void,
  { rejectValue: CaRanhModel[] }
>('caranh/getAllCaRanh', async (_, { rejectWithValue }) => {
  try {
    const caRanhService = new CaRanhService();
    const res = await caRanhService.getAllCaRanh();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as CaRanhModel[]);
  }
});

export const onThunkGetCaRanhGv = createAsyncThunk<
  CaRanhModel[],
  string,
  { rejectValue: CaRanhModel[] }
>('caranh/getCaRanhGv', async (gv: string, { rejectWithValue }) => {
  try {
    const caRanhService = new CaRanhService();
    const res = await caRanhService.getCaRanhOfGv(gv);
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as CaRanhModel[]);
  }
});

export const onThunkPutAllCaRanh = createAsyncThunk<
  void,
  CaRanhModel[],
  { rejectValue: string }
>('caranh/putAllCaRanh', async (data: CaRanhModel[], { rejectWithValue }) => {
  try {
    const lichThiService = new CaRanhService();
    const res = await lichThiService.putAllCaRanh(data);

    if (res.success) {
      console.log(res);
    } else {
      console.log('thất bại ');
    }
  } catch (e) {
    console.log(e);
    rejectWithValue('not succes');
  }
});
