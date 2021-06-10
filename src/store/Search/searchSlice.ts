import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
  },

  reducers: {
    onSetSearchText: (state, action: PayloadAction<{ searchText: string }>) => {
      state.searchText = action.payload.searchText;
    },
  },
});

export const { onSetSearchText } = searchSlice.actions;

export default searchSlice.reducer;
