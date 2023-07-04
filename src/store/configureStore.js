import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "./user";
import taskReducer from './tasksReduxToolkit';
import categoryReducer from './category';
import blog from './blog';
import error from './middleware/error';
import api from './middleware/api';
const store = configureStore({
    reducer:{
    tasks:taskReducer,
    users:userReducer,
    category:categoryReducer,
    blog:blog,
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware()],
})

export default store;