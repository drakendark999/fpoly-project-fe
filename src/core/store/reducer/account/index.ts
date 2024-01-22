import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { onThunkCheckEmail } from './thunk';
import { CheckAccountResponseMessages } from '@src/core/libs/constants';
import { LoginStatus } from '@src/core/libs/constants';
import { AccountState } from './types';

const localToken = localStorage.getItem('fpf-client-token');
const initialState: AccountState = {
  accessToken: localToken ?? '',
  loginStatus: localToken ? LoginStatus.LoggedIn : '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,

  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      const newToken = action.payload;
      localStorage.setItem('fpf-client-token', newToken);
      state.accessToken = newToken;
    },
    clearAccount: (state) => {
      localStorage.removeItem('fpf-client-token');
      state.accessToken = '';
      state.loginStatus = '';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(onThunkCheckEmail.fulfilled, (state, action) => {
      const { message } = action.payload;
      switch (message) {
        case CheckAccountResponseMessages.OK:
          state.loginStatus = LoginStatus.LoggedIn;
          break;
        case CheckAccountResponseMessages.EmptyRequest:
          state.loginStatus = LoginStatus.NotAnEmail;
          break;
        case CheckAccountResponseMessages.NotFPTEmail:
          state.loginStatus = LoginStatus.NotFPTEmail;
          break;
        default:
          state.loginStatus = LoginStatus.NotFound;
      }
    });
  },
});

export const accountReducer = accountSlice.reducer;
export const accountAction = accountSlice.actions;
export default accountSlice;
