import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { apiCallBegan } from "./api";
const initialState={
    users:[],
    loading:false,
    error:null
}
let id = 0;

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers:{
        //action : function
        apiRequested:(state,action)=>{
            state.loading = true
        },
        apiRequestFailed:(state,action)=>{
            state.loading = false
        },
        getUsers:(state,action)=>{
           state.users = action.payload
           state.loading = false
        },
        addUser :(state,action) => {
            state.users.push(action.payload);
        },
        // removeTask : (state,action)=>{
        //     const index = state.tasks.findIndex(task=>task.id === action.payload.id)
        //     state.tasks.splice(index,1)
        // },
        // completedTask : (state,action) => {
        //     const index = state.findIndex(task=>task.id === action.payload.id)
        //     state.tasks[index].completed = action.payload.completed
        // }
    },

})

export const {apiRequested,apiRequestFailed, getUsers, addUser} = userSlice.actions
export default userSlice.reducer;

//Action creators

export const loadUsers = () =>apiCallBegan({
    url:url,
    onStart:apiRequested.type,
    onSuccess:getUsers.type,
    onError:apiRequestFailed.type
})

export const createUsers = (signInFormData) => apiCallBegan({
    url:"/user/create-user",
    method:"POST",
    data: signInFormData,
    onSuccess:addUser.type,
})
// export const updateCompleted = task => apiCallBegan({
//     url : `${url}/${task.id}`,
//     method: "PATCH",
//     data: task,
//     onSuccess: completedTask.type
// })
// export const deleteTask = task => apiCallBegan({
//     url : `${url}/${task.id}`,
//     method: "DELETE",
//     onSuccess: removeTask.type
// })