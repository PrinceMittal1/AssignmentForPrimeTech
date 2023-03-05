import { configureStore } from '@reduxjs/toolkit';
import personReducer from "./NewSlice"

const store = configureStore({
  reducer: {
    person: personReducer,
  },
});

export default store;

// import {configureStore} from "@reduxjs/toolkit";
// import customereducer from "./Mystore"
// import { combineReducers } from 'redux';
// import { addingdetail } from './AllactionsSlice';

// const rootReducer = combineReducers({
//   adding: addingdetail,
// });

// const MyStore= configureStore({
//     reducer:rootReducer
// });

// export default MyStore;

// import { combineReducers, createStore } from 'redux';
// import { addingdetail } from './AllactionsSlice';

// const rootReducer = combineReducers({
//   adding: addingdetail,
// });

// const MyStore = createStore(rootReducer);

// export default MyStore;