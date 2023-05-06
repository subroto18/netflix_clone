import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type sData = {
  [key: string]: any;
  search_result?: any;
};

export interface sSlice {
  searchData: sData;
  isSearch: boolean;
  searchValue: string;
  loading: boolean;
  error: boolean;
  errorMsg: string;
  statusCode: number;
}

const initialState: sSlice = {
  searchData: {},
  isSearch: false,
  searchValue: "",
  loading: false,
  error: false,
  errorMsg: "",
  statusCode: 200,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateSearchResult: (state, action: PayloadAction<object>) => {
      state.searchData = action.payload;
    },
    updateIsSearch: (state, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
    updateSearchValue: (state, action: PayloadAction<string>) => {
      console.log(action.payload, "action.payload");
      state.searchValue = action.payload;
    },
    updateSearchErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateSearchErrorMsg: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
    },
    updateSearchStatusCode: (state, action: PayloadAction<number>) => {
      state.statusCode = action.payload;
    },
  },
});

export const {
  updateIsSearch,
  updateSearchValue,
  updateSearchLoading,
  updateSearchResult,
  updateSearchErrorStatus,
} = searchSlice.actions;

export default searchSlice.reducer;
