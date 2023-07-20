import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  search: string;
};

const initialState: InitialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;
