import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "./middleware/api";

const initialState={
    blog:[],
    loading:false,
    error:null
}

//CREATE
export const createBlog = createAsyncThunk("blog/create", async (postData) => {
    try {
      const response = await api(
        `${process.env.REACT_APP_API}/blog/create-blog`,
        "POST",
        postData
      );
  
      return response.data;
    } catch (err) {
      console.error(err);
    }
  });

  export const loadBlog = createAsyncThunk(
    "blog/getBlog",
    async (param) => {
      const response = await api(
        `${process.env.REACT_APP_API}/category`,
        "GET",
        ""
      );
      return response.data;
    }
  );
const blogSlice = createSlice({
    name : "blog",
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    // Add a case for the `getUserGroupByEmail` action
    builder.addCase(createBlog.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  
      builder.addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      builder.addCase(loadBlog.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(loadBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      });
      builder.addCase(loadBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
}

})

export default blogSlice.reducer;

