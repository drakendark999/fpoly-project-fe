import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToaNhaModel } from '@src/core/models/toanha/toanha.model';
import { ToaNhaService } from '@src/core/services/toanha.service';

export const onThunkGetAllToaNha = createAsyncThunk<
  ToaNhaModel[],
  void,
  { rejectValue: ToaNhaModel[] }
>('toanha/getAllToaNha', async (_, { rejectWithValue }) => {
  try {
    const toaNhaService = new ToaNhaService();
    const res = await toaNhaService.getAllToaNha();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as ToaNhaModel[]);
  }
});
