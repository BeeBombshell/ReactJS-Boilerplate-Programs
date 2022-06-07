import { configureStore, createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;