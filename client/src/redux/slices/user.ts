import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../types/types";

type InitialState = {
  userInformation: User | null;
};

const initialState: InitialState = {
  userInformation: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
