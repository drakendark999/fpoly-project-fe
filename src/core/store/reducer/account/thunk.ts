import { createAsyncThunk } from '@reduxjs/toolkit';
import { AccountService } from '@src/core/services/account.service';
import { CheckResponse } from './types';

export const onThunkCheckEmail = createAsyncThunk<
  CheckResponse,
  string,
  { rejectValue: string }
>('account/checkEmail', async (email: string, { rejectWithValue }) => {
  try {
    const accountService = new AccountService();
    const res = await accountService.checkEmail(email);
    return res;
  } catch (e) {
    return rejectWithValue('Error message here');
  }
});
