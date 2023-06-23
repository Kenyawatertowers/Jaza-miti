import { combineReducers,configureStore } from "@reduxjs/toolkit";

// call reducer 
import questionReducer from "./question_reducer";

const rootReducer = combineReducers({
    questions: questionReducer,
})

// create store with reducer
export default configureStore({reducer : rootReducer})