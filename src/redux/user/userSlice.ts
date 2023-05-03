import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./user.types";
import { UserResponse } from "@/utils/api/types.api";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserResponse>) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.user = action.payload.user.user;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
