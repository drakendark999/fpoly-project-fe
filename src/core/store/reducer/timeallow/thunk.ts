import { createAsyncThunk } from '@reduxjs/toolkit';
import { TimeAllowModel } from '@src/core/models/timeallow/timeallow.model';
import { TimeAllowService } from '@src/core/services/timeallow.service';

export const onThunkGetAllTimeAllow = createAsyncThunk<
  TimeAllowModel[],
  void,
  { rejectValue: TimeAllowModel[] }
>('timeallow/getAllTimeAllow', async (_, { rejectWithValue }) => {
  try {
    const timeAllowService = new TimeAllowService();
    const res = await timeAllowService.getAllTimeAllow();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as TimeAllowModel[]);
  }
});
