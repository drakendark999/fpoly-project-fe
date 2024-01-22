import { createAsyncThunk } from '@reduxjs/toolkit';
import { KyThiModel } from '@src/core/models/kythi/kythi.model';
import { KyThiService } from '@src/core/services/kythi.service';

export const onThunkGetAllKyThi = createAsyncThunk<
  KyThiModel[],
  void,
  { rejectValue: KyThiModel[] }
>('kythi/getAllKyThi', async (_, { rejectWithValue }) => {
  try {
    const kythiService = new KyThiService();
    const res = await kythiService.getAllKyThi();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as KyThiModel[]);
  }
});
