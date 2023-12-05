import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterslice'
const store  = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export {store}