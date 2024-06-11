import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    finish : boolean,
    delete : boolean , 
    add : boolean,
    edit : boolean
}

const initialState : ModalState = {
    finish : false,
    delete : false,
    add : false,
    edit : false 
}

export const modalSlice = createSlice( {
    name: "modal",
    initialState,
    reducers : {
        finishOpen(state) {
            state.finish = true
        },
        finishClose(state) {
            state.finish = false
        },
        deleteOpen(state) {
            state.delete = true
        },
        deleteClose(state) {
            state.delete = false
        },
        addOpen(state) {
            state.add = true
        },
        addClose(state) {
            state.add = false
        },
        editOpen(state) {
            state.edit = true
        },
        editClose(state) {
            state.edit = false
        }
    }
})


export default modalSlice.reducer

export const {finishOpen} = modalSlice.actions
export const {finishClose} = modalSlice.actions
export const {deleteOpen} = modalSlice.actions
export const {deleteClose} = modalSlice.actions
export const {addOpen} = modalSlice.actions
export const {addClose} = modalSlice.actions
export const {editOpen} = modalSlice.actions
export const {editClose} = modalSlice.actions
