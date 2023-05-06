import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type detailObj = {
  original_title?: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  release_date?: string;
};

export interface detailSlice {
  data: detailObj;
  loading: boolean;
  error: boolean;
  errorMsg: string;
  statusCode: number;
}

const initialState: detailSlice = {
  data: {},
  loading: true,
  error: false,
  errorMsg: "",
  statusCode: 200,
};

export const videDetailsSlice = createSlice({
  name: "videoDetails",
  initialState,
  reducers: {
    updateDetailsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateDetailsData: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
    updateDetailsErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateDetailsErrorMsg: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
    },
    updateDetailsStatusCode: (state, action: PayloadAction<number>) => {
      state.statusCode = action.payload;
    },
  },
});

export const {
  updateDetailsLoadingStatus,
  updateDetailsData,
  updateDetailsErrorStatus,
} = videDetailsSlice.actions;

export default videDetailsSlice.reducer;
