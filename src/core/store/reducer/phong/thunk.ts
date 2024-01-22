import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhongModel } from '@src/core/models/phong/phong.model';
import { PhongService } from '@src/core/services/phong.service';

export const onThunkGetAllPhong = createAsyncThunk<
  PhongModel[],
  void,
  { rejectValue: PhongModel[] }
>('phong/getAllPhong', async (_, { rejectWithValue }) => {
  try {
    const phongService = new PhongService();
    const res = await phongService.getAllPhong();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as PhongModel[]);
  }
});
