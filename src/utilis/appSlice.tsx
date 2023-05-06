import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface apSlice {
  modal: boolean;
}

const initialState: apSlice = {
  modal: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
});

export const { showModal } = appSlice.actions;

export default appSlice.reducer;
