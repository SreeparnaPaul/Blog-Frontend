import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "./middleware/api";

const initialState={
    category:[],
    loading:false,
    error:null
}

//CREATE
export const createCatgory = createAsyncThunk("category/create", async (postData) => {
    try {
      const response = await api(
        `${process.env.REACT_APP_API}/category`,
        "POST",
        postData
      );
  
      return response.data;
    } catch (err) {
      console.error(err);
    }
  });

  export const loadCatgory = createAsyncThunk(
    "category/getCategory",
    async (param) => {
      const response = await api(
        `${process.env.REACT_APP_API}/category`,
        "GET",
        ""
      );
      return response.data;
    }
  );
const categorySlice = createSlice({
    name : "category",
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    // Add a case for the `getUserGroupByEmail` action
    builder.addCase(createCatgory.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(createCatgory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  
      builder.addCase(createCatgory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      builder.addCase(loadCatgory.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(loadCatgory.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
      builder.addCase(loadCatgory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
}

})

export default categorySlice.reducer;

