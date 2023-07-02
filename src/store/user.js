import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "./middleware/api";

const initialState={
    users:[],
    loading:false,
    error:null
}

//CREATE
export const createUsers = createAsyncThunk("user/create", async (postData) => {
    try {
      const response = await api(
        `${process.env.REACT_APP_API}/user/create-user`,
        "POST",
        postData
      );
  
      return response.data;
    } catch (err) {
      console.error(err);
    }
  });

  export const loadUsers = createAsyncThunk(
    "users/getUsers",
    async (param) => {
      const response = await api(
        `${process.env.REACT_APP_API}/user`,
        "GET",
        ""
      );
      return response.data;
    }
  );
const userSlice = createSlice({
    name : "users",
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    // Add a case for the `getUserGroupByEmail` action
    builder.addCase(createUsers.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(createUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  
      builder.addCase(createUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      builder.addCase(loadUsers.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
      builder.addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
}

})

export default userSlice.reducer;

