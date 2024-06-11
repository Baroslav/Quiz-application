import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { editOpen } from "../../store/reducers/modalSlice"
import { setId } from "../../store/reducers/quizSlice"

const Edit = (id : any) => {
    const dispatch = useAppDispatch()
    const index = useAppSelector(state => state.quizSlice.id)
    
     const editCLick = ( ) => {
        dispatch(setId(id.id))
        dispatch(editOpen())
     }

    return (
        <span onClick={editCLick} className="edit-btn">Edit quiz</span>
    )
}

export default Edit