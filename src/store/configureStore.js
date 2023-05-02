import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "./user";
import taskReducer from './tasksReduxToolkit';
import error from './middleware/error';
import api from './middleware/api';
const store = configureStore({
    reducer:{
    tasks:taskReducer,
    users:userReducer,
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),error,api],
})

export default store;