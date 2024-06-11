import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "./reducers/modalSlice";
import quizSlice from "./reducers/quizSlice";


const rootReducer  = combineReducers ( {
    modalSlice,
    quizSlice
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']