import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "./user";
import taskReducer from './tasksReduxToolkit';
import categoryReducer from './category';
import error from './middleware/error';
import api from './middleware/api';
const store = configureStore({
    reducer:{
    tasks:taskReducer,
    users:userReducer,
    category:categoryReducer,
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware()],
})

export default store;