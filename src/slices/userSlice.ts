// slices/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/store/store";

interface UserState {
  user: any;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state: RootState) => state.userInfo.user;
