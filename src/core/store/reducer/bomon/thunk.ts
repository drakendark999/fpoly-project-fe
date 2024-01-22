import { createAsyncThunk } from '@reduxjs/toolkit';
import { BoMonModel } from '@src/core/models/bomon/bomon.model';
import { BoMonService } from '@src/core/services/bomon.service';

export const onThunkGetAllBoMon = createAsyncThunk<
  BoMonModel[],
  void,
  { rejectValue: BoMonModel[] }
>('bomon/getAllBoMon', async (_, { rejectWithValue }) => {
  try {
    const bomonService = new BoMonService();
    const res = await bomonService.getAllBoMon();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as BoMonModel[]);
  }
});
