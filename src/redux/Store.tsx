import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/User';
import contactReducer from './slice/Contact';

export default configureStore({
    reducer: {
        user: userReducer,
        contact: contactReducer,
    },
})