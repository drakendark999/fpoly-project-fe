import { createAsyncThunk } from '@reduxjs/toolkit';
import { GiangVienModel } from '@src/core/models/giangvien/giangvien.model';
import { GiangVienService } from '@src/core/services/giangvien.service';

export const onThunkGetAllDataGiangVien = createAsyncThunk<
  GiangVienModel[],
  void,
  { rejectValue: GiangVienModel[] }
>('giangvien/getAllGiangVien', async (_, { rejectWithValue }) => {
  try {
    const giangVienService = new GiangVienService();
    const res = await giangVienService.getAllGiangVien();
    if (res) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return rejectWithValue([] as GiangVienModel[]);
  }
});

export const onThunkPutSttGiangVien = createAsyncThunk<
  void,
  { MaNV: string },
  { rejectValue: string }
>(
  'giangvien/putSttGiangVien',
  async (data: { MaNV: string }, { rejectWithValue }) => {
    try {
      const giangVienService = new GiangVienService();
      const res = await giangVienService.putSttGiangVien(data);
      console.log(res);
      if (res.success) {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      rejectWithValue('not succes');
    }
  },
);
