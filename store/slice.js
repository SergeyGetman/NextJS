import { createSlice } from "@reduxjs/toolkit";

export const getDataSliceInfo = createSlice({
  name: "globalInfo",
  initialState: {
    name: "",
    data: [],
    showIsLogin: false,
  },

  reducers: {
    addDataUser(state, action) {
      console.log("this is state", { ...state });
      console.log("this is action", action);
    },
  },
});

export default getDataSliceInfo.reducer;
export const { addDataUser } = getDataSliceInfo.actions;
