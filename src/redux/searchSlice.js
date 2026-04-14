import { createSlice } from "@reduxjs/toolkit";

//created search slice to search for the input value we typed in the input field.
const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;