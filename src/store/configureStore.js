import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import employeeReducer from './employees';
import taskReducer from './tasksReduxToolkit';
import error from './middleware/error';
import api from './middleware/api';
const store = configureStore({
    reducer:{
    tasks:taskReducer,
    employees:employeeReducer
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),error,api],
})

export default store;