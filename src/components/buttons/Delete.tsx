import { useAppDispatch } from "../../hooks/redux"
import { deleteOpen } from "../../store/reducers/modalSlice"
import "../buttons/btn.css"

const Delete = ({setDeletedQuiz , title } : {setDeletedQuiz : any , title : string}) => {
    const dispatch = useAppDispatch()

    const openDelete = () => {
        dispatch(deleteOpen())
        setDeletedQuiz(title)
    }

    return (
        <span onClick={openDelete} className="delete"></span>
    )
}

export default Delete